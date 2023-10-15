import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    handleChangeFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});
export const { handleChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// export default filterSlice.reducer;
// export const filterReducer = filterSlice.reducer;
