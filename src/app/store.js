
import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from './../features/todo/todoSlice';
import todoReducer from '../features/todo/todoSlice';

//  creating a store
export const store = configureStore({
   reducer: todoReducer
});
