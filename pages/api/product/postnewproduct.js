// post req for new product

import { connectDb } from "@/utils/database";
import { ProductModel } from "@/models/productModel";

export default async function postnewproduct(req, res) {
  await connectDb();
  const { name, price, description } = req.body;
  const product = await ProductModel.create({
    name,
    price,
    description,
  });
  res.status(201).json({ success: true, product });
}