import Loadable from "@/components/Loadable";
import React, { lazy } from "react";
import { ROUTES } from "./types";
import ProtectedRoute from "@/hooks/protectedRoute";
import DashboardLayout from "@/layout/DashboardLayout";

const Home = Loadable(lazy(() => import("@/layout/DashboardLayout"))); 

const Posts = Loadable(lazy(() => import("@/containers/posts/index")));


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
        {
            path: ROUTES.POSTS,
            element: (
                <ProtectedRoute>
                    <Home>
                        <Posts />
                    </Home>
                </ProtectedRoute>
            ),
        }
    ]
}

export default MainRoutes;