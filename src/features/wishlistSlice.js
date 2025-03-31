import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://ecommerce-backends-gamma.vercel.app";

export const postProductInWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (product) => {
    const response = await axios.post(`${API_URL}/whislist/add`, product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("admin-token")}`,
      },
    });

    return response.data;
  }
);

export const deleteWishlistItem = createAsyncThunk(
  "product/deleteWishlistProduct",
  async (id) => {
    const response = await axios.delete(`${API_URL}/wishlist/remove/${id}`);

    return response.data;
  }
);

const initialState = {
  wishlist: [],
  status: "idle",
  error: null,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemPresent = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (itemPresent) {
        return;
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      const removeWishList = state.wishlist.filter(
        (product) => product._id !== action.payload
      );
      state.wishlist = removeWishList;
    },
  },
  extraReducers: (builder) => {
    // for adddig data in wishlist
    builder.addCase(postProductInWishlist.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(postProductInWishlist.fulfilled, (state) => {
      state.status = "Success";
    });
    builder.addCase(postProductInWishlist.rejected, (state) => {
      state.status = "error";
    });

    // for deleting wishlist item
    builder.addCase(deleteWishlistItem.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(deleteWishlistItem.fulfilled, (state) => {
      state.status = "Success";
    });
    builder.addCase(deleteWishlistItem.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { addToWishlist, removeFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
