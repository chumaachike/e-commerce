import express from 'express';
import productModel from '../models/product.model.js';
const productRouter = express.Router();
productRouter.post('/products', async (req, res) => {
    try {
        const newProduct = await productModel.create(req.body);
        res.status(201).json(newProduct);
    }
    catch (err) {
        res.status(500).json({ message: `Error creating product ${err}` });
    }
});
productRouter.get('/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
});
productRouter.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productModel.findById(productId);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving product' });
    }
});
productRouter.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const updateFields = req.body;
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(productId, updateFields, { new: true });
        if (updatedProduct) {
            res.json(updatedProduct);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating product' });
    }
});
productRouter.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(productId);
        if (deletedProduct) {
            res.json({ message: 'Product deleted successfully' });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
});
export default productRouter;
//# sourceMappingURL=product.routes.js.map