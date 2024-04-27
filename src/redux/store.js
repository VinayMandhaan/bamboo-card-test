import { configureStore } from '@reduxjs/toolkit';
import todo from './reducers/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todo
    }
});