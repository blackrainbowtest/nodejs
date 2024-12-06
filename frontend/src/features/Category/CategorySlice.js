// src/app/Category/CategorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { addCategory, getCategorys } from "./CategoryAPI";

const initialState = {
    data: [],
    gender: true,
    category: {
        male: -1,
        female: -1
    },
    value: "1",
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        changeGender: (state, action) => {
            state.gender = action.payload;
        },
        changeCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategorys.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload];
            });
    }
});

export default categorySlice.reducer;

export const { changeGender, changeCategory } = categorySlice.actions;