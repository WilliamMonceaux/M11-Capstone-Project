import { connectMongo } from '@/lib/mongodb';
import { Comment } from '@/models/Comment';
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

export async function POST(req, { params }) {
  try {
    await connectMongo();

    const { id } = await params;

    const { content, author } = await req.json();

    if (!content || !author) {
      return NextResponse.json(
        { error: 'Comment content and author are required' },
        { status: 400 }
      );
    }

    const newComment = await Comment.create({
      content,
      author,
      post: id,
    });

    const populatedComment = await newComment.populate(
      'author',
      'username profilePicture'
    );

    return NextResponse.json(populatedComment, { status: 201 });
  } catch (err) {
    console.error('POST Comment error:', err);
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 });
  }
}
