import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const { user } = await req.json();

    // Check if user data exists
    if (!user) {
      return NextResponse.json(
        { error: "User data is required" },
        { status: 400 }
      );
    }

    console.log("User received:", user);

    // Mock logic to check if the user already exists
    const userExists = false; // Replace with actual database logic

    if (userExists) {
      return NextResponse.json(
        { message: "User already exists", user },
        { status: 200 }
      );
    }

    // Mock logic for creating a new user
    const newUser = { ...user, id: "12345" }; // Replace with actual user creation logic

    console.log("New user created:", newUser);

    return NextResponse.json(
      { message: "User verified successfully", user: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/verify-user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}