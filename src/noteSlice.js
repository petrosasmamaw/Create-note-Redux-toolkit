import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch('https://68972041250b078c20410a01.mockapi.io/notes/database/users');
 if (!response.ok) throw new Error('Failed to fetch notes');    
  return await response.json();
});

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    favorites: [],
    allNotes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addNote: (state, action) => {
      const exists = state.favorites.some((note) => note.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeNote: (state, action) => {
      state.favorites = state.favorites.filter(
        (note) => note.id !== action.payload.id
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allNotes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addNote, removeNote, clearFavorites } = noteSlice.actions;

// selectors
export const selectAllNotes = (state) => state.notes.allNotes;
export const selectIsLoading = (state) => state.notes.isLoading;
export const selectError = (state) => state.notes.error;
export const selectFavorites = (state) => state.notes.favorites;

export default noteSlice.reducer;
