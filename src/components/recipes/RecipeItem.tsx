import { Fragment, useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiCookingPot } from "react-icons/gi";
import { RxCheck } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { BASEURL } from "../../constants/index";
import FavoriteButton from "../UI/FavoriteButton";
type RecipeType = {
  publisher: string;
  id: string;
  ingredients: { description: string; quantity: number; unit: string }[];
  cooking_time: number;
  servings: number;
  title: string;
  image_url: string;
};
const RecipeItem = () => {
  const [recipe, setRecipe] = useState<RecipeType>();
  const { recipeId } = useParams();
  useEffect(() => {
    const fetchRecipe = async (url: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipe(data.data.recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe(`${BASEURL}${recipeId}`);
  }, [recipeId]);
  return (
    <div>
      {recipe && (
        <Fragment>
          <h1 className="main_title">{recipe.title}</h1>
          <ul className="main_list">
            <li className="main_item">
              <GiCookingPot />
              <p>{recipe.cooking_time}</p>
            </li>
            <li className="main_item">
              <BsFillPeopleFill />
              <p>{recipe.servings}</p>
            </li>
            <li>
              <FavoriteButton
                recipeProps={{
                  title: recipe.title,
                  image: recipe.image_url,
                  id: recipe.id,
                }}
              />
            </li>
          </ul>
          <div className="main_ingredients">
            <div className="main_ingredients_left">
              <img src={recipe.image_url} alt="" />
            </div>
            <div className="main_ingredients_right">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((item, index) => (
                  <div key={index}>
                    <RxCheck />
                    <li>
                      <p>{item.quantity ? item.quantity : "A little"}</p>
                      <p>{item.unit ? item.unit : ""}</p>
                      <p>{item.description ? item.description : "A little"}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default RecipeItem;
