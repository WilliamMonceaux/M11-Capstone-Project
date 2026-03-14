import { connectMongo } from '@/lib/mongodb';
import { User } from '@/models/User';
import { PrayerPost } from '@/models/PrayerPost'; 
import { Comment } from '@/models/Comment';
import { Like } from '@/models/Like';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Types } from 'mongoose';
import { uploadToS3 } from '@/lib/s3';

export async function PATCH(req) {
  try {
    await connectMongo();
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const formData = await req.formData();
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const file = formData.get('profilePicture');
    if (file && typeof file !== 'string' && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const s3Url = await uploadToS3(buffer, file.name, file.type);
      user.profilePicture = s3Url;
    }

    const allowedUpdates = ['username', 'email', 'password'];
    allowedUpdates.forEach((key) => {
      const value = formData.get(key);
      if (value && typeof value === 'string' && value.trim() !== '') {
        user[key] = value;
      }
    });

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    return NextResponse.json({ 
      message: 'Profile updated successfully', 
      user: userResponse 
    }, { status: 200 });

  } catch (err) {
    console.error('PATCH ERROR:', err);
    return NextResponse.json({ message: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectMongo();
    
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (jwtErr) {
      return NextResponse.json({ message: 'Session expired' }, { status: 401 });
    }

    const userId = decoded.userId;
    const userObjectId = new Types.ObjectId(userId);

    const deletedUser = await User.findByIdAndDelete(userId);
    
    if (!deletedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    await Promise.all([
      PrayerPost.deleteMany({ user_id: userObjectId }),
      Comment.deleteMany({ user_id: userObjectId }),
      Like.deleteMany({ user_id: userObjectId })
    ]);

    cookieStore.delete('token');

    return NextResponse.json({ message: 'Account deleted' }, { status: 200 });

  } catch (err) {
    console.error('DELETE ERROR:', err);
    return NextResponse.json({ 
      message: 'Internal Server Error', 
      error: err.message 
    }, { status: 500 });
  }
}