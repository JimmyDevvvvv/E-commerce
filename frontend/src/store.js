import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
    },
    devTools: true,
});

export default store;
