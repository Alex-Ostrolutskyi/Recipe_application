import React, { Fragment } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default Root;
