import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

/* export default mongoose.models.Product || mongoose.model("Product", productSchema); */

mongoose.models = {}; // this line is important for nextjs
export const ProductModel = mongoose.model("Product", productSchema);
