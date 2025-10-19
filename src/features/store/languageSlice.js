import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'arm',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
