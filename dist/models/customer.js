import mongoose from 'mongoose';
import { validateEmail, validatePhone } from './validator.js';
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        validate: validatePhone,
    },
    email: {
        type: String,
        validate: validateEmail,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
export default mongoose.model('Customer', customerSchema);
//# sourceMappingURL=customer.js.map