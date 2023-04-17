import { ProductModel } from "@/models/productModel";
import { connectDb } from "@/utils/database";

export default async function getAllProduct(req, res) {
  await connectDb();
  
  const products = await ProductModel.find({});
  res.status(200).json({ success: true,products });
}
