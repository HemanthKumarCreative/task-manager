import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../app/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
