import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { addToFavorite, removeFromFavourite } from "../../store/RecipeSlice";
import classes from "../../styles/favorite.module.scss";
type RecipeProps = {
  recipeProps: {
    id: string;
    title: string;
    image: string;
  };
};
const FavoriteButton: React.FC<RecipeProps> = ({ recipeProps }) => {
  const dispatch = useAppDispatch();
  const [isFavor, setIsFavor] = useState<boolean>();
  const storeData = useAppSelector((state) => state.favorite.favorite);
  const isFavoritePerson = storeData.find((item) => item.id === recipeProps.id);
  useEffect(() => {
    isFavoritePerson ? setIsFavor(true) : setIsFavor(false);
  }, [isFavoritePerson]);

  const dispatchHandler = () => {
    if (isFavor) {
      setIsFavor(false);
      dispatch(
        removeFromFavourite({
          id: recipeProps.id,
          title: recipeProps.title,
          image: recipeProps.image,
        })
      );
    } else {
      setIsFavor(true);
      dispatch(
        addToFavorite({
          id: recipeProps.id,
          image: recipeProps.image,
          title: recipeProps.title,
        })
      );
    }
  };
  return (
    <div
      className={
        isFavor
          ? `${classes.favorite} ${classes.active}`
          : `${classes.favorite}`
      }
      onClick={dispatchHandler}
    >
      <button>
        <AiOutlineHeart />
      </button>
      <p>Favorite</p>
    </div>
  );
};

export default FavoriteButton;
