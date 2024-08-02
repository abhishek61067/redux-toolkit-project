import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// generates pending,fullfilled and rejected action types
export const fetchUsers = createAsyncThunk("youcanputanynamehere", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload);
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false), (state.users = []);
      state.error = action.error.message;
    });
  },
});
const usersRootReducer = usersSlice.reducer;

export default usersRootReducer;
