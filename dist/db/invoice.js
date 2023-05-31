import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));
const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
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
        validate: (value) => {
            if (value <= 0) {
                throw new Error('Total amount must be greater than 0');
            }
        }
    },
    dueDate: {
        type: Date
    },
    status: {
        type: String,
        required: true,
        enum: ['draft', 'sent', 'paid', 'overdue']
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
export default mongoose.model('Invoice', invoiceSchema);
//# sourceMappingURL=invoice.js.map