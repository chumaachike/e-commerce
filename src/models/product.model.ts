import { Schema, Document, model } from "mongoose";

interface Product extends Document {
  name: String;
  description: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema <Product>({
  name:{
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value <= 0) {
        throw new Error('Total amount must be greater than 0');
      }
    }
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default model<Product>('Product', productSchema);