import { connectMongo } from '@/lib/mongodb';
import { User } from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectMongo();
    const users = await User.find({}).select('-password -__v').sort({ createdAt: -1 }); // finds users and displays them at top of list; Excludes their passwords when finding users
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
