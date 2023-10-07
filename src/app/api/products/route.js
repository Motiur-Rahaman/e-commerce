import { NextResponse } from "next/server";
import ProductModel from "@/util/mongoDB/Models/ProductModel";
import connectionDB from "@/util/mongoDB/connection/dbConnect";

export async function GET() {
  try {
    await connectionDB();
    const data = await ProductModel.find();

    return NextResponse.json({ data, success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to retrieve data from the database", success: false },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const bodyData = await req.json();

    await connectionDB();

    const newProductData = new ProductModel(bodyData);
    const data = await newProductData.save();

    return NextResponse.json({ data, success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to retrieve data from the database", success: false },
      { status: 500 }
    );
  }
}
