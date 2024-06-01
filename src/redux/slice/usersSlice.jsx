// usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createUser: (state, action) => {
      state.data.push(action.payload);
    },
    updateUser: (state, action) => {
      state.data = state.data.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  createUser,
  updateUser,
  deleteUser,
} = usersSlice.actions;

export default usersSlice.reducer;
