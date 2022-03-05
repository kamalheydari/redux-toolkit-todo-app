import { createSlice } from "@reduxjs/toolkit";

const initialState = { filterStatus: "all", todoList: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    deleteTodo: (state, action) => {
      const index = state.todoList.find((item) => item.id === action.payload);
      if (index !== -1) {
        state.todoList.splice(index, 1);
      }
    },

    updateTodo: (state, action) => {
      state.todoList.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = action.payload.status;
          todo.title = action.payload.title;
        }
      });
    },

    filterTodos: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  filterTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
