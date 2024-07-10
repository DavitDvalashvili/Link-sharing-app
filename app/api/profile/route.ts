import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import User from "@/Models/users.model";

export const GET = async (request: any, response: any) => {
  try {
    await connectDB();

    let user = User.find({ email: "dvala2024@gmail.com" });

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error(`Error getting invoices ${error.message}`);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
