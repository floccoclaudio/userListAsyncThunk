import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUserList = createAsyncThunk(
  "userList/fetchUsers",
  async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/5");
    response = await response.json();
    console.log(response);
    return response;
  }
);

export const userListSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => console.log(state))
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(fetchUserList.rejected, (state) => console.log(state));
  },
});

//export const {reducers} = userListSLice.actions

export default userListSlice.reducer;
