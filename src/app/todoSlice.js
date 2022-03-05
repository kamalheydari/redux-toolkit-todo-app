import { createSlice } from "@reduxjs/toolkit";

const initialState = { filterStatus: "all", todoList: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});



export default todoSlice.reducer;