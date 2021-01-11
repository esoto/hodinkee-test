import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBooting: false,
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startBoot: (state) => {
      state.isBooting = true;
    },
    completeBoot: (state) => {
      state.isBooting = false;
    },
  },
});

export const { startBoot, completeBoot } = slice.actions;

export const selectIsBooting = (state) => state.app.isBooting;

export default slice.reducer;
