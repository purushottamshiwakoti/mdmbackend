import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password, role } = await req.json();
    console.log(fullName, email, password);

    const existingEmail = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = await db.user.create({
      data: {
        email,
        fullName,
        password,
        role,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
