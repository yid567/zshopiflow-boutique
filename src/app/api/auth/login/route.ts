import { NextResponse } from "next/server";
import { db } from "@/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    if (!db) {
      return NextResponse.json(
        { error: "Base de données non configurée" },
        { status: 503 }
      );
    }

    const { users } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    const result = await db.select().from(users).where(eq(users.email, email));
    if (result.length === 0) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
    }

    const user = result[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
    }

    const response = NextResponse.json({
      message: "Connexion réussie",
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
    console.error("Login error:", err);
    return NextResponse.json({ error: "Erreur de connexion" }, { status: 500 });
  }
}
    const result = await db.select().from(users).where(eq(users.email, email));
    if (result.length === 0) {
      return NextResponse.json(
        { error: "Email ou mot de passe incorrect" },
        { status: 401 }
      );
    }

    const user = result[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Email ou mot de passe incorrect" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      message: "Connexion réussie",
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
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Erreur de connexion" },
      { status: 500 }
    );
  }
}
