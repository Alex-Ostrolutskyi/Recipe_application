import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
type SomeDataProps = {
  recipeList: {
    publisher: string;
    id: string;
    title: string;
    image_url: string;
  }[];
};
const RecipesList: React.FC<SomeDataProps> = ({ recipeList }) => {
  const [recipes, setRecipes] = useState<
    | { image_url: string; title: string; publisher: string; id: string }[]
    | undefined
  >();
  useEffect(() => {
    if (recipeList.length > 10) {
      const slicesRecipes = recipeList.slice(0, 10);
      setRecipes(slicesRecipes);
    } else {
      setRecipes(recipeList);
    }
  }, [recipeList]);
  return (
    <div className="aside_block">
      <ul className="aside_list">
        {recipes &&
          recipes.map((item, index) => (
            <li key={index} className="aside_item">
              <NavLink to={`recipe/${item.id}`}>
                <img src={item.image_url} alt="" />
                <div className="aside_description">
                  <p>{item.title}</p>
                  <p>{item.publisher}</p>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecipesList;
