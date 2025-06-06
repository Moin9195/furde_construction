// middleware.ts
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (token) {
    // If token exists, user is authenticated
    if (
      url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup")
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  if (!token && url.pathname.startsWith("/dashboard")) {
    // If no token and trying to access protected routes, redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && url.pathname.startsWith("/login")) {
    // If token exists and trying to access login, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

// Protect these routes only
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard/:path*",
    // add other protected paths here
  ],
};
