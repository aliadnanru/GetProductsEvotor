import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false, // حالة التحميل
    },
    reducers: {
        setProduct(state, action) {
            state.products = action.payload;
            state.isLoading = false; // إيقاف حالة التحميل بعد التعيين
        },
        setLoading(state, action) {
            state.isLoading = action.payload; // تعيين حالة التحميل
        }
    },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
