import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';
import favoriteReducer from './noteFavoriteSlice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    favorites: favoriteReducer,
  },
});
