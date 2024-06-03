import {NextRequest, NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/db';
import User from '@/models/user.model';
import {signToken} from '@/lib/jwt';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const {email, password} = await req.json();

        const user = await User.findOne({email});
        if (!user) {
            return new Response('Invalid email or password', {status: 401});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new Response('Invalid email or password', {status: 401});
        }

        const token = signToken({userId: user._id});

        const response = NextResponse.json({
            message: 'Login successful!',
            token,
            user: {email: user.email, id: user._id, username: user.username}
        });
        response.cookies.set('token', token, {httpOnly: true, secure: process.env.NODE_ENV === 'production'});

        return response;
    } catch (error) {
        console.error(error);
        return new Response('Failed to login', {status: 500});
    }
}
