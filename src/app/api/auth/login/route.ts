import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Connexion temporairement désactivée. La boutique reste accessible sans compte.",
    },
    { status: 503 }
  );
}