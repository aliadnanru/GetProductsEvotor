import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
    },
    reducers: {
        setProduct(state, action) {
            state.products = action.payload;
        },
        updateProduct(state, action) {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        }
    },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
