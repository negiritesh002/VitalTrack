import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/api";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
};

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: any) => {
    const res = await api.post("/auth/register", data);
    return res.data;
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: any) => {
    const res = await api.post("/auth/login", data);
    return res.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);
      });
  },
});

export default authSlice.reducer;