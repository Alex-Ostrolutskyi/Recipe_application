import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./RecipeSlice";

export const store = configureStore({
  reducer: {
    favorite: RecipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
