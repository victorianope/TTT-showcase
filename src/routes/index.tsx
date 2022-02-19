import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "~/components/base/fc";

const HomePage = lazy(() => import("../pages/home"));

const AllRoutes: Component = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />}>
        <Route path={":id"} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
