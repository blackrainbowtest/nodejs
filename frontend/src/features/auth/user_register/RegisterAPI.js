import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from 'app/base/base_url';
import { addError, setLoading } from 'features/global/GlobalSlice';

/**
 * Check if email already exists
 */
const checkEmailExists = async (email) => {
  const response = await axios.get(`${apiUrl}/users?email=${email}`);
  return response.data.length > 0;
};

/**
 * Register user
 */
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      // Check if email already exists
      const emailExists = await checkEmailExists(userData.email);
      if (emailExists) {
        throw new Error('Email already exists.');
      }

      // User registration
      const response = await axios.post(`${apiUrl}/users`, userData);

      return response.data;
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
