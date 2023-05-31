import express from 'express';
import connectDB from './db.js';
import productRouter from './routes/product.routes.js';
connectDB();
const app = express();
app.use(express.json());
app.use('/', productRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Sever is running on port 3000");
});
//# sourceMappingURL=index.js.map