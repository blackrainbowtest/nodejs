import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from 'features/global/GlobalSlice';

/**
 * Logout user add logic later
 */
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(addNotification("Logout success."))
      return true;
    // eslint-disable-next-line no-unreachable
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);