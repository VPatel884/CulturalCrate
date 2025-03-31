import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://ecommerce-backends-gamma.vercel.app";

// API requests for handling addresses
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (address) => {
    const response = await axios.post(`${API_URL}/address/add`, address, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);

export const updatedAddress = createAsyncThunk(
  "address/updateAddress",
  async (updatedAddress) => {
    const response = await axios.put(
      `${API_URL}/address/update/${updatedAddress.id}`,
      updatedAddress
    );
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (id) => {
    const response = await axios.delete(`${API_URL}/address/remove/${id}`);
    return response.data;
  }
);

//   generating token
export const generateToken = createAsyncThunk(
  "token/getToken",
  async (userDetails) => {
    const response = await axios.post(`${API_URL}/auth/login`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
);

//   registering user
export const signUpUser = createAsyncThunk(
  "signUp/user",
  async (userDetails) => {
    const response = await axios.post(`${API_URL}/auth/register`, userDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  }
);

const initialState = {
  token: localStorage.getItem("admin-token") || null,
  addresses: [],
  status: "idle",
  error: null,
  name: "",
  email: "",
};

export const logInRegisterSlice = createSlice({
  name: "logInRegister",
  initialState,
  reducers: {
    addAddresses: (state, action) => {
      state.addresses = [...state.addresses, action.payload];
    },
    updateAddress: (state, action) => {
      const addressIndex = state.addresses.findIndex(
        (add) => add.id === action.payload.id
      );

      if (addressIndex !== -1) {
        // Update the address at the found index with the new data
        state.addresses[addressIndex] = {
          ...state.addresses[addressIndex],
          ...action.payload,
        };
      }
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (add) => add.id !== action.payload
      );
    },
    removeTokenFromRedux: (state, action) => {
      state.token = action.payload;
    },
    removeUserDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    // for authentication
    builder.addCase(generateToken.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(generateToken.fulfilled, (state, action) => {
      state.status = "Success";
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      localStorage.setItem("admin-token", action.payload.token);
    });
    builder.addCase(generateToken.rejected, (state) => {
      state.error = "error";
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.status = "Success";
    });
    builder.addCase(signUpUser.rejected, (state) => {
      state.error = "error";
    });
  },
});

export const {
  addAddresses,
  updateAddress,
  removeAddress,
  removeTokenFromRedux,
  removeUserDetails,
} = logInRegisterSlice.actions;

export default logInRegisterSlice.reducer;
