import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Inscription temporairement désactivée. Contactez Zshopiflow par WhatsApp pour créer un compte.",
    },
    { status: 503 }
  );
}