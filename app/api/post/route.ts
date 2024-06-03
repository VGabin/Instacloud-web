import {NextRequest, NextResponse} from 'next/server';
import connectToDatabase from '@/lib/db';
import Post from '@/models/post.model';

export async function GET() {
    try {
        await connectToDatabase();
        const posts = await Post.find({});
        return NextResponse.json(posts);
    } catch (error) {
        console.error(error);
        return new Response('Failed to fetch posts', {status: 500});
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const post = new Post(body);
        await post.save();
        return NextResponse.json(post);
    } catch (error) {
        console.error(error);
        return new Response('Failed to create post', {status: 500});
    }
}
