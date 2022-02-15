import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../features/todoList/todoListSlice";

export const todoStore = configureStore({
  reducer: {
    todo: todoListSlice
  }
})

export type RootState = ReturnType<typeof todoStore.getState>
export type AppDispatch = typeof todoStore.dispatch
