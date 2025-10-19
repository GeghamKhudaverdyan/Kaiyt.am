import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/store/languageSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
