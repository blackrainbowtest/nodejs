// src/app/Category/CategoryAPI.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from 'app/base/base_url';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';

const url = `${apiUrl}/subCategory`;

export const getSubCategorys = createAsyncThunk(
    'subCategory/getSubCategorys',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const addSubCategory = createAsyncThunk(
    'subCategory/addSubCategory',
    async (subCategory, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post(url, { ...subCategory });
            dispatch(addNotification("Sub category add successful"));
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false)); // maybe i dont need this one IDK
        }
    }
);