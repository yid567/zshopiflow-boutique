import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const existing = await db.select().from(users).where(eq(users.email, email));
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Un compte existe déjà avec cet email" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 12);

    const result = await db
      .insert(users)
      .values({ name, email, password: hashed })
      .returning();

    const user = result[0];

    const response = NextResponse.json({
      message: "Compte créé avec succès",
      user: { id: user.id, name: user.name, email: user.email },
    });

    response.cookies.set("session", JSON.stringify({ id: user.id, name: user.name, email: user.email }), {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err: unknown) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Erreur lors de la création du compte" },
      { status: 500 }
    );
  }
}
