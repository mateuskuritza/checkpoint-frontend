import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { usersAPI } from './services/users';

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        const jwt = request.cookies.get('jwt')?.value;
        if (!jwt) return;

        const isLogged = await usersAPI.is_logged(jwt);
        if (isLogged) return NextResponse.redirect(new URL('/workhours', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/workhours')) {
        const jwt = request.cookies.get('jwt')?.value;
        if (!jwt) return NextResponse.redirect(new URL('/', request.url));

        const isLogged = await usersAPI.is_logged(jwt);
        if (!isLogged) return NextResponse.redirect(new URL('/', request.url));
    }
}
