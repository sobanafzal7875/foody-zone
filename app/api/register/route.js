import { NextResponse } from "next/server";

let users = []; // In-memory "database"

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if user already exists
    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    // Add new user
    const newUser = { email, password };
    users.push(newUser);

    return NextResponse.json({ message: "Registration successful" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}