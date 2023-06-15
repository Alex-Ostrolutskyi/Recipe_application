import { useAppSelector } from "../store/hook";
import { NavLink } from "react-router-dom";
const Favorite = () => {
  const favorite = useAppSelector((state) => state.favorite.favorite);
  return (
    <div className="aside_block">
      <h1 className="main_title">Favorite dishes</h1>
      <ul className="aside_list">
        {favorite &&
          favorite.map((item, index) => (
            <NavLink key={index} to={`/recipe/${item.id}`}>
              <li className="aside_item">
                <img src={item.image} alt="" />
                <div className="aside_description">
                  <p>{item.title}</p>
                </div>
              </li>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Favorite;
