// src/auth/user_login/LoginAPI.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "app/base/base_url";
import {
  addError,
  addNotification,
  setLoading,
} from "features/global/GlobalSlice";

/**
 * Login user
 */
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${apiUrl}/users/login`, userData);
      dispatch(addNotification(response.data.message));
      return response.data;
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
/**
 * Verify token need add JWT token later
 */
export const verifyToken = createAsyncThunk(
  "user/verifyToken",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${apiUrl}/users/token`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
