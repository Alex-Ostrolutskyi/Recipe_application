const RecipeInfo = () => {
  return (
    <div>
      <h2 className="addRecipe_form_title">Recipe info</h2>
      <ul className="addRecipe_form_details">
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Title</label>
          <input type="text" name="title" required />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Servings</label>
          <input type="text" name="servings" required />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Preparation time</label>
          <input type="text" name="time" required />
        </li>
        <li className="addRecipe_form_details_item">
          Publisher
          <input type="text" name="publisher" required />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Image URL</label>
          <input type="text" name="image" required />
        </li>
        <li className="addRecipe_form_details_item">
          <label htmlFor="">Source_url</label>
          <input type="text" name="urlData" required />
        </li>
      </ul>
    </div>
  );
};

export default RecipeInfo;
