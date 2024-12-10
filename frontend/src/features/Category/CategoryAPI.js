// src/app/Category/CategoryAPI.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "app/base/base_url";
import {
  addError,
  addNotification,
  setLoading,
} from "features/global/GlobalSlice";

const url = `${apiUrl}/categories`;

export const getCategorys = createAsyncThunk(
  "category/getCategorys",
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
  "category/addCategory",
  async (category, { dispatch, rejectWithValue }) => {
    try {
      if (
        !category ||
        !category.name ||
        !category.image ||
        typeof category.gender !== "boolean"
      ) {
        return rejectWithValue("Invalid category data");
      }

      dispatch(setLoading(true));

      const response = await axios.post(url, category);
      dispatch(addNotification("Category add successful"));
      return response.data;
    } catch (err) {
        const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      dispatch(addError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
