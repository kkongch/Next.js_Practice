import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = { number: 0 };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    change: (state, { payload }) => {
      state.number = payload;
    },
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
    reset: (state) => {
      state.number = initialState.number;
    },
  },
});

export default userSlice.reducer;
export const { increase, decrease, change, reset } = userSlice.actions;
