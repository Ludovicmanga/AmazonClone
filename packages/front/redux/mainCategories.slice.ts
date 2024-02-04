import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { id: number; name: string }[] = [];

export const mainCategoriesSlice = createSlice({
  name: "main categories",
  initialState,
  reducers: {
    setMainCategories(
      state,
      action: PayloadAction<{ id: number; name: string }[]>
    ) {
      state = action.payload;
      return state;
    },
  },
});

export const { setMainCategories } = mainCategoriesSlice.actions;
export default mainCategoriesSlice.reducer;
