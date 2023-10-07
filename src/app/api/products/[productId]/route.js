import ProductModel from "@/util/mongoDB/Models/ProductModel";
import connectionDB from "@/util/mongoDB/connection/dbConnect";
import { NextResponse } from "next/server";

export async function PUT(req, con) {
  try {
    await connectionDB();
    const _id = con.params.productId;
    const data = await req.json();
    console.log(_id, data);

    const updateData = await ProductModel.findOneAndUpdate({ _id }, data, {
      new: true,
    });

    return NextResponse.json(
      { data: updateData, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 200 }
    );
  }
}

export async function GET(req, con) {
  try {
    await connectionDB();
    const _id = con.params.productId;

    const updateData = await ProductModel.findById({ _id });

    return NextResponse.json(
      { data: updateData, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 200 }
    );
  }
}

export async function DELETE(req, con) {
  try {
    await connectionDB();
    const _id = con.params.productId;

    const updateData = await ProductModel.findByIdAndDelete({ _id });

    return NextResponse.json(
      { data: updateData, success: true, message: "Product Deleted success." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 200 }
    );
  }
}
