/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add(state, action) {
      //@ts-expect-error
      state.push(action.payload);
    },
    remove(state, action) {
      //@ts-expect-error
      return state.filter((item) => item.id !== action.payload);
    },
    toggle(state, action) {
      //@ts-expect-error
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        //@ts-expect-error
        todo.completed = !todo.completed;
        //@ts-expect-error
        console.log(todo.completed);
      }
    },
    edit(state, action) {
      //@ts-expect-error
      const todo = state.find((item) => item.id === action.payload.id);
      if (todo) {
        //@ts-expect-error
        todo.title = action.payload.title;
      }
    },
  },
});

export const { add, remove, toggle, edit } = TodoSlice.actions;
export default TodoSlice.reducer;
