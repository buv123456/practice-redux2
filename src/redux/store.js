import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { todosReducer } from './todosSlice';



export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer
  },

});

