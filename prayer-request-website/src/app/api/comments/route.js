import { connectMongo } from '@/lib/mongodb';
import { Comment } from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const { id } = await params;
    const comments = await Comment.find({ post: id })
      .populate('author', 'username profilePicture')
      .sort({ createdAt: -1 });

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch comments for this post' },
      { status: 500 }
    );
  }
}
