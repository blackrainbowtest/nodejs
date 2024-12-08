import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from 'app/base/base_url';
import { addError, setLoading } from 'features/global/GlobalSlice';

/**
 * Register user 
 */
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      // User registration
      console.log(userData);
      const response = await axios.post(`${apiUrl}/users/register`, userData);

      return response.data;
    } catch (err) {
      dispatch(addError(err.message));
      return rejectWithValue(err.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
