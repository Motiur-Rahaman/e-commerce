import { NextResponse } from "next/server";
import userData from "@/util/userDB";

export async function GET(req) {
  const users = userData;

  return NextResponse.json(users, { status: 200 });
}

export async function POST(req, content) {
  const body = await req.json();
  body.id = content.params.id;

  if (!body.name || !body.age || !body.email) {
    return NextResponse.json(
      { message: "Please Fill All The Input Tags" },
      { status: 400 }
    );
  }

  return NextResponse.json({ users: body }, { status: 200 });
}
