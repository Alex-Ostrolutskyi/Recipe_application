import React from "react";

const RecipeIngedients = () => {
  return (
    <div>
      <h2 className="addRecipe_form_title">Ingredients</h2>
      <ul className="addRecipe_form_details">
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 1</label>
          <input
            type="text"
            name="ingredient"
            required
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 2</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 3</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 4</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 5</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Ingredient 6</label>
          <input
            type="text"
            name="ingredient"
            placeholder="Format: Quantity, Unit, Ingredient name"
          />
        </li>
      </ul>
    </div>
  );
};

export default RecipeIngedients;
