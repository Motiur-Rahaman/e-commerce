import userData from "@/util/userDB";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const uId = res.params.id;

  const user = userData.filter((el) => el.id == uId);
  if (user.length > 0) {
    return NextResponse.json(user[0], { status: 200 });
  } else {
    // Handle the case where no matching user is found
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function PUT(req, content) {
  const body = await req.json();
  body.id = content.params.id;
  console.log(body);

  if (!body.name || !body.age || !body.email) {
    return NextResponse.json(
      { message: "Please Update All The Input Tags", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ user: body, success: true }, { status: 200 });
}

export function DELETE(req, con) {
  const id = con.params.id;
  if (id) {
    return NextResponse.json(
      { message: "User deleted success", success: true },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      message: "User Not Found With This Id, try again later.",
      success: false,
    },
    { status: 404 }
  );
}
