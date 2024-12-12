// src/app/Category/CategorySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { addSubCategory, getSubCategorys } from "./SubCategoryAPI";

const initialState = {
    data: [],
    currentSubcategory: -1,
};

const subCategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        changeCurrentSubcategory: (state, action) => {
            state.currentSubcategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubCategorys.fulfilled, (state, action) => {                
                state.data = action.payload;
            })
            .addCase(addSubCategory.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload.subCategory];
            });
    }
});

export default subCategorySlice.reducer;

export const { changeCurrentSubcategory } = subCategorySlice.actions;