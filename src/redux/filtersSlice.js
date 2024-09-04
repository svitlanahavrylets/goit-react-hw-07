import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

export const selectFilterValue = (state) => state.filters.name;
