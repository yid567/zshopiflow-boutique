import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const cookie = request.headers.get("cookie") || "";
    const sessionMatch = cookie.match(/session=([^;]+)/);
    if (!sessionMatch) {
      return NextResponse.json({ user: null });
    }

    const session = JSON.parse(decodeURIComponent(sessionMatch[1]));
    return NextResponse.json({ user: session });
  } catch {
    return NextResponse.json({ user: null });
  }
}
