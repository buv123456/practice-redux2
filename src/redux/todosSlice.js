import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
      /// Fetch
    [fetchTodos.pending](state) {
      state.isLoading = true
    },
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchTodos.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    /// Add
    [addTodo.pending](state) {
      state.isLoading = true
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
     /// Delete
    [deleteTodo.pending](state) {
      state.isLoading = true
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.isLoading = false;
    },
    [deleteTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});



export const todosReducer = todoSlice.reducer;
