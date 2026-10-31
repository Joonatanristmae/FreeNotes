import { NextResponse, type NextRequest } from "next/server";

/**
 * Cookie-free geo entry: Lithuanian visitors hitting freenotes.eu `/`
 * are sent to `/lt`. Choosing International goes to `/international`,
 * which is never geo-redirected.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const onFreenotesEu =
    host === "freenotes.eu" || host === "www.freenotes.eu";

  if (!onFreenotesEu) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country");
  if (country === "LT") {
    const url = request.nextUrl.clone();
    url.pathname = "/lt";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
