// src/app/Category/CategoryAPI.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from 'app/base/base_url';
import { convertImageToBase64 } from 'utils/image';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';

const url = `${apiUrl}/category`;

export const getCategorys = createAsyncThunk(
    'category/getCategorys',
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

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (category, { dispatch, rejectWithValue }) => {
        try {
            const base64Image = category.image ? await convertImageToBase64(category.image) : null;
            const response = await axios.post(url, { ...category, image: base64Image });
            dispatch(addNotification("Category add successful"))
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false)); // maybe i dont need this one IDK
        }
    }
);