import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, params: any) {
  try {
    const id = params.params.id;
    const { Update, Secure } = await req.json();
    const dev = await db.device.update({
      where: {
        id,
      },
      data: {
        Update,
        Secure,
      },
    });
    return NextResponse.json({ message: "Successfully secured device", dev });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
}
export async function GET(req: NextRequest, params: any) {
  try {
    const id = params.params.id;
    const data = await db.device.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "Successfully fetched device", data });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
}
