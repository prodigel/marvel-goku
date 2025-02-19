import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  filter: string;
  favorites: boolean;
}

const initialState: FilterState = {
  filter: '',
  favorites: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setFavorites(state, action: PayloadAction<boolean>) {
      state.favorites = action.payload;
    },
    toggleFavorites(state) {
      state.favorites = !state.favorites;
    },
    resetFilter(state) {
      state.filter = ''
    },
  },
});

export const { setFilter, setFavorites, toggleFavorites, resetFilter } = appSlice.actions;
export default appSlice.reducer;