import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 8000;
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('WOOOOOOOOOOOO');
});
app.use('/api/products', productRoutes);
app.listen(port, () => console.log(`Server running on port ${port}`));