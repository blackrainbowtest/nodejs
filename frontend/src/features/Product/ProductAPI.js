import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "app/base/base_url";
import {
  addError,
  addNotification,
  setLoading,
} from "features/global/GlobalSlice";

const url = `${apiUrl}/products`;

export const getProducts = createAsyncThunk(
  "products/getproducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      dispatch(addError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProducts",
  async (productData, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));

      const formData = new FormData();

      if (productData.tags && typeof productData.tags === "object") {
        formData.append("tags", JSON.stringify(productData.tags));
      }
      if (productData.golds && typeof productData.golds === "object") {
        formData.append("golds", JSON.stringify(productData.golds));
      }
      if (productData.stones && typeof productData.stones === "object") {
        formData.append("stones", JSON.stringify(productData.stones));
      }
      if (productData.works && typeof productData.works === "object") {
        formData.append("works", JSON.stringify(productData.works));
      }
      if (productData.price && typeof productData.price === "object") {
        formData.append("price", JSON.stringify(productData.price));
      }

      if (productData.images && Array.isArray(productData.images)) {
        productData.images.forEach((image) => {
          if (image instanceof File) {
            formData.append("images", image);
          }
        });
      }

      for (const key in productData) {
        if (
          key !== "images" && 
          key !== "tags" && 
          key !== "golds" && 
          key !== "stones" && 
          key !== "price" && 
          key !== "works"
        ) {
          formData.append(key, productData[key]);
        }
      }

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(addNotification("Product add successful"));
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      dispatch(addError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }
);


export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (product, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`${url}/${product.id}`);
      dispatch(
        addNotification(
          `Product ${
            product.article.length ? product.article : "A555"
          } delete successful`
        )
      );
      return product.id;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      dispatch(addError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const patchProduct = createAsyncThunk(
  "products/patchProducts",
  async (productData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${url}/${productData.id}`,
        productData
      );
      dispatch(addNotification("Product patch successful"));
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      dispatch(addError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
