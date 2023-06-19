import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./features/todo/todoSlice";

const store = configureStore({
    reducer: {
        todo:todoReducers
    },
});

export default store;