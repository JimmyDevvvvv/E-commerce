import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios'; // Import the axios instance

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/api/products'); // Adjust endpoint if necessary
        return response.data;
    } catch (error) {
        // Return a rejected value with a specific error message if the request fails
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
    }
});

// Product slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const productReducer = productSlice.reducer;
export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;
