import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from 'app/base/base_url';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';
import { convertImageToBase64 } from 'utils/image';

const url = `${apiUrl}/products`;

export const getProducts = createAsyncThunk(
    'products/getproducts',
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

export const addProduct = createAsyncThunk(
    'products/addProducts',
    async (productData, { dispatch, rejectWithValue }) => {
        try {
            const base64Image = productData.images.length ? await convertImageToBase64(productData.images) : [];
            const response = await axios.post(url, { ...productData, images: base64Image });
            dispatch(addNotification("Product add successful"))
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (product, { dispatch, rejectWithValue }) => {
        try {
            await axios.delete(`${url}/${product.id}`)
            dispatch(addNotification(`Product ${product.article.length ? product.article : "A555"} delete successful`))
            return product.id
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
)

export const patchProduct = createAsyncThunk(
    'products/patchProducts',
    async (productData, { dispatch, rejectWithValue }) => {
        try {
            const base64Image = productData.images.length ? await convertImageToBase64(productData.images) : [];
            const response = await axios.patch(`${url}/${productData.id}`, {
                ...productData, images: base64Image
            });
            dispatch(addNotification("Product patch successful"))
            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);