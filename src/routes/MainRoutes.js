import Loadable from "@/components/Loadable";
import React, { lazy } from "react";

const Home = Loadable(lazy(() => import("@/containers/Auth/home"))) 

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "home",
            element: <Home />
        },
    ]
}

export default MainRoutes;