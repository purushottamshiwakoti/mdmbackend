import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, params: any) {
  try {
    const id = params.params.id;
    const { Update, Secure } = await req.json();
    if (Update) {
      const dev = await db.device.update({
        where: {
          id,
        },
        data: {
          Update,
        },
      });

      return NextResponse.json({ message: "Successfully updated device", dev });
    }
    if (Secure) {
      const dev = await db.device.update({
        where: {
          id,
        },
        data: {
          Secure,
        },
      });

      return NextResponse.json({ message: "Successfully secured device", dev });
    }
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
}
