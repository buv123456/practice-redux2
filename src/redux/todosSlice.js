import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo({ items }, { payload }) {
      console.log(payload);
      items.push(payload);
    },
    deleteTodo(state, { payload }) {
      console.log(payload);
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todosReducer = todoSlice.reducer;
