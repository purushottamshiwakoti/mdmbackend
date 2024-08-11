import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { name, Settings, Health, Update, Secure } = await req.json();

    await db.device.create({
      data: {
        name,
        Settings,
        Health,
        Update,
        Secure,
      },
    });

    return NextResponse.json(
      { message: "Enrolled device successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  try {
    const dev = await db.device.findMany({});

    return NextResponse.json(
      { message: "Fetched device successfully", dev },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
