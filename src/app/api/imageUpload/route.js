import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json(
        { message: "No Image Found", success: false },
        { status: 404 }
      );
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;

    // Use writeFileAsync instead of writeFile for promise-based handling
    await writeFile(path, buffer);

    // Return a success response
    return NextResponse.json(
      { message: "Image Upload Success.", success: true },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error:", error);

    // Return an error response
    return NextResponse.json(
      { message: "Server Problem", success: false, error },
      { status: 500 }
    );
  }
}
