import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from './CounterReducer';

export const counterStore = configureStore({ 
    reducer: {
      counter: CounterReducer
    }
   });