import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    roles: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchRolesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRolesSuccess(state, action) {
      state.loading = false;
      state.roles = action.payload;
    },
    fetchRolesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRolesRequest, fetchRolesSuccess, fetchRolesFailure } =
  rolesSlice.actions;

export default rolesSlice.reducer;
