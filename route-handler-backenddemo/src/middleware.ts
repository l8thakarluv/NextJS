import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // modifying response headers
    const response = NextResponse.next();
    const theme = request.cookies.get('theme');
    if (!theme) {
        response.cookies.set('theme', 'dark');
    }

    // setting custom headers
    response.headers.set('custom-header', 'custom-value');

    return response;

    // 2nd approach to intercept profile page
    // if (request.nextUrl.pathname === '/profile') {
    //     // return NextResponse.redirect(new URL('/hello', request.url));

    //     // rewrite allows to redirect to profile page, but replaces content with "hello" page
    //     return NextResponse.rewrite(new URL('/hello', request.url));

    // }
}

// 1st approach to intercept profile page
// export const config = {
//     matcher: "/profile"
// }