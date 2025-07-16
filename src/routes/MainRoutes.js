import Loadable from "@/components/Loadable";
import React, { lazy } from "react";
import { ROUTES } from "./types";
import ProtectedRoute from "@/hooks/protectedRoute";

const Home = Loadable(lazy(() => import("@/containers/dashboard/DashBoardHeader"))) 

const MainRoutes = {
    path: "/",
    children: [
        {
            path: ROUTES.HOME,
            element:(
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            )
        },
    ]
}

export default MainRoutes;