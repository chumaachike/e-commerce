import { Schema, model } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        validate: (value) => {
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
export default model('Product', productSchema);
//# sourceMappingURL=product.model.js.map