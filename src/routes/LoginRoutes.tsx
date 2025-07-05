import Loadable from "components/Loadable";
import React, { lazy } from "react";

// ✅ lazy load your component
const AuthLogin = Loadable(lazy(() => import("@/containers/Auth")));

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "login",
      element: <AuthLogin />, // ✅ use JSX syntax here
    },
  ],
};

export default LoginRoutes;
