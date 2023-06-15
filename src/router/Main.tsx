import React, { Fragment, useState } from "react";

import RecipesList from "../components/recipes/RecipesList";
import "../styles/main.scss";

const Main: React.FC = () => {
  const [recipeList, setRecipeList] = useState();
  const [searchItem, setSearchItem] = useState("");

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchItem(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchList = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`
      );
      const data = await response.json();
      setRecipeList(data.data.recipes);
    };
    fetchList();
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search your recipe"
          value={searchItem}
          onChange={changeHandler}
        />
        <button type="submit">search</button>
      </form>
      <div className="aside-main">
        <aside className="aside">
          {recipeList && <RecipesList recipeList={recipeList} />}
        </aside>
      </div>
    </Fragment>
  );
};

export default Main;
