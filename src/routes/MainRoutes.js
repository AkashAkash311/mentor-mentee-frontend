import Loadable from "@/components/Loadable";
import React, { lazy } from "react";
import { ROUTES } from "./types";

const Home = Loadable(lazy(() => import("@/containers/dashboard/DashBoardHeader"))) 

const MainRoutes = {
    path: "/",
    children: [
        {
            path: ROUTES.HOME,
            element: <Home />
        },
    ]
}

export default MainRoutes;