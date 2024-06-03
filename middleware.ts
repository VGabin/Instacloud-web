import {NextRequest, NextResponse} from 'next/server';
import {verifyToken} from '@/lib/jwt';
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

export function middleware(req: NextRequest) {
    let token: RequestCookie | string | undefined = req.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    } else {
        token = req.headers.get('Authorization')?.split(' ')[1];
    }

    console.log("ssssssss", token)

    const verifiedToken = verifyToken(token);

    console.log("ssssssss", verifiedToken)


    if (!verifiedToken) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/user/:path*'],
};
