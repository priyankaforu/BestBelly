import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { validationSchema } from "@/lib/validation";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const validation = validationSchema.safeParse({ gmailId: body.gmail_id });
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error.issues[0].message },
        { status: 400 }
      );
    }
    const user = await User.create(body);
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already registered",
        },
        {
          status: 409,
        }
      );
    }
    return NextResponse.json(
      { success: false, error: "server error" },
      { status: 500 }
    );
  }
}
