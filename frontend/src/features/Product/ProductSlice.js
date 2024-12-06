import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProducts, deleteProduct, patchProduct } from './ProductAPI';

const initialState = {
    data: [],
    currentData: {}
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCurrentData: (state, action) => {
            state.currentData = action.payload
        },
        resetCurrentData: (state, _) => {
            state.currentData = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload]
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = state.data.filter((prod) => prod.id !== action.payload)
            })
            .addCase(patchProduct.fulfilled, (state, action) => {
                state.data = state.data.map((prod) => prod.id === action.payload.id ? action.payload : prod)
            })
    },
});

export default productSlice.reducer;

export const { setCurrentData, resetCurrentData } = productSlice.actions