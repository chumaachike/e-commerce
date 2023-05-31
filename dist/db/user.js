import mongoose from 'mongoose';
import { validateEmail, validatePassword } from './validator.js';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: validateEmail,
        unique: true,
    },
    password: {
        type: String,
        validate: validatePassword
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
export default mongoose.model('User', userSchema);
//# sourceMappingURL=user.js.map