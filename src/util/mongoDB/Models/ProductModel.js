import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String },
  category: { type: String },
});

const ProductModel =
  mongoose.models.products || mongoose.model("products", ProductSchema);

export default ProductModel;
