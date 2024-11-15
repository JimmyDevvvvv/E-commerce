import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 8000;
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Simple route to check the server
app.get('/', (req, res) => {
    res.send('WOOOOOOOOOOOO');
});

// Product routes
app.use('/api/products', productRoutes);

// Error handling middleware (if you have these middlewares set up)
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
