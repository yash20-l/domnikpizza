import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export function middleware(NextRequest = NextRequest, NextResponse = NextResponse) {
    console.log('here');
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}