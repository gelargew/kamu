import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {

  const token = request.cookies.get('token')
  if (!token?.value) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}


export const config = {
  matcher: [

    '/((?!api|_next/static|_next/image|favicon.ico|auth|icons).*)',
  ],
}