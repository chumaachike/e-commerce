import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    require: true,
    unique: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  totalAmount: {
    type: Number,
    require: true,
    validate: (value: number) => {
      if (value <= 0) {
        throw new Error('Total amount must be greater than 0');
      }
    }
  },
  dueDate:{
    type: Date
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'shipped', 'delivered']
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
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
})

export default mongoose.model('Invoice', orderSchema);
