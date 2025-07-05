import Loadable from "components/Loadable";
import React, { lazy } from "react";

const AuthLogin = Loadable(lazy(() => import("@/containers/Auth")));

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
  ],
};

export default LoginRoutes;
