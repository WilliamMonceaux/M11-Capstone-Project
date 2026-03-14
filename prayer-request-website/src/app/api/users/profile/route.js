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

    const username = formData.get('username');
    if (username && username.trim() !== '') {
      user.username = username;
    }

    const email = formData.get('email');
    if (email && email.trim() !== '') {
      user.email = email;
    }

    const newPassword = formData.get('password');
    if (newPassword && newPassword.trim() !== '') {
      user.password = newPassword; 
    }

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    return NextResponse.json({ 
      message: 'Profile updated successfully', 
      user: userResponse 
    }, { status: 200 });

  } catch (err) {
    console.error('PATCH ERROR:', err);
    return NextResponse.json({ message: 'Update failed', error: err.message }, { status: 500 });
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
      return NextResponse.json({ message: 'Session expired. Please log in again.' }, { status: 401 });
    }

    const userId = decoded.userId;

    const deletedUser = await User.findByIdAndDelete(userId);
    
    if (!deletedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    try {
      await PrayerPost.deleteMany({ 
        $or: [{ user_id: userId }, { author: userId }, { userId: userId }] 
      }); 
      
      await Comment.deleteMany({ 
        $or: [{ author: userId }, { user_id: userId }, { userId: userId }] 
      });

      await Like.deleteMany({ user_id: userId });
    } catch (cleanupErr) {
      console.warn("Cleanup warning: User deleted, but some orphan content might remain.", cleanupErr);
    }

    cookieStore.delete('token');

    return NextResponse.json({ message: 'Account deleted' }, { status: 200 });

  } catch (err) {
    console.error('SERVER DELETE ERROR:', err);
    return NextResponse.json({ 
      message: 'Internal Server Error', 
      error: err.message 
    }, { status: 500 });
  }
}