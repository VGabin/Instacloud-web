import {NextRequest, NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/db';
import User from '@/models/user.model';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const { username, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();
        return NextResponse.json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        return new Response('Failed to register user', { status: 500 });
    }
}
