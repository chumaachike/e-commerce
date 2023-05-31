import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/ecom');
        console.log('Connected to the database!');
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map