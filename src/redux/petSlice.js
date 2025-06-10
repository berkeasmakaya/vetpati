import { createSlice } from '@reduxjs/toolkit';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    list: [],
  },
  reducers: {
    setPets: (state, action) => {
      state.list = action.payload;
    },
    clearPets: (state) => {
      state.list = [];
    },
  },
});

export const { setPets, clearPets } = petsSlice.actions;
export default petsSlice.reducer;
