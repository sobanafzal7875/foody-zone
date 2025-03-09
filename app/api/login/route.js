import { NextResponse } from "next/server";

let users = []; // In-memory "database"

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Find user
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}