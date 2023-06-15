import React, { useRef } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipeIngedients from "./RecipeIngedients";
import { KEY, BASEURL } from "../constants/index";
import { sendData } from "../Helpers/index";
import "../styles/addRecipe.scss";
type IngredientsOBJ = {
  quantity: number | undefined;
  unit: string | undefined;
  description: string | undefined;
};
type newRecipeData = {
  title: string;
  servings: number;
  cooking_time: number;
  publisher: string;
  image_url: string;
  source_url: string;
  ingredients: IngredientsOBJ[];
};
const AddRecipe = () => {
  const form = useRef<HTMLFormElement>(null);
  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const ing = formData.getAll("ingredient") as string[];
      const updatedIng = ing.map((ing) => {
        const ingArr = ing.replaceAll(" ", "").split(",");
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : undefined,
          unit,
          description,
        };
      });
      const recipeInfoData: newRecipeData = {
        title: formData.get("title") as string,
        servings: Number(formData.get("servings")),
        cooking_time: Number(formData.get("time")),
        publisher: formData.get("publisher") as string,
        image_url: formData.get("image") as string,
        source_url: formData.get("urlData") as string,
        ingredients: updatedIng as IngredientsOBJ[],
      };

      await sendData(`${BASEURL}?key=${KEY}`, recipeInfoData);
    }
  };
  return (
    <div className="addRecipe">
      <form
        action=""
        className="addRecipe_form"
        ref={form}
        onSubmit={formSubmit}
      >
        <RecipeInfo />
        <RecipeIngedients />
        <button type="submit">Add your recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
