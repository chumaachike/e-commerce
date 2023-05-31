import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        require: true,
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
export default mongoose.model('Product', productSchema);
//# sourceMappingURL=products.js.map