import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Recipe = {
  id: string;
  title: string;
  image: string;
};

type RecipeState = {
  favorite: Recipe[];
};

const initialState: RecipeState = {
  favorite: [],
};

const recipeSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, actions: PayloadAction<Recipe>) {
      const recipeId = actions.payload.id;
      const isExsist = state.favorite.find(({ id }) => id === recipeId);
      if (!isExsist) {
        state.favorite.push({
          id: actions.payload.id,
          image: actions.payload.image,
          title: actions.payload.title,
        });
      }
    },
    removeFromFavourite(state, actions: PayloadAction<Recipe>) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== actions.payload.id
      );
    },
  },
});

export const { addToFavorite, removeFromFavourite } = recipeSlice.actions;
export default recipeSlice.reducer;
