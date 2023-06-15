import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Root from "./router/Root";
import Main from "./router/Main";
import Authentication from "./router/Authentication";
import Cooking from "./router/Cooking";
import Favorite from "./router/Favorite";
import Error from "./router/Error";
import RecipeItem from "./components/recipes/RecipeItem";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "recipe/:recipeId",
        element: <RecipeItem />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "start-cooking",
        element: <Cooking />,
      },
      {
        path: "login",
        element: <Authentication />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
