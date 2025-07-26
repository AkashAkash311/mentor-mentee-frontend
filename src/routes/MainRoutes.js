import Loadable from "@/components/Loadable";
import React, { lazy } from "react";
import { ROUTES } from "./types";
import ProtectedRoute from "@/hooks/protectedRoute";
import DashboardLayout from "@/layout/DashboardLayout";

const Home = Loadable(lazy(() => import("@/layout/DashboardLayout"))); 

const Dummy = Loadable(lazy(() => import("@/containers/Dummy/dummy")));

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
            path: ROUTES.DUMMY,
            element: (
                <ProtectedRoute>
                    <DashboardLayout>
                        <Dummy />
                    </DashboardLayout>
                </ProtectedRoute>
            )
        }
    ]
}

export default MainRoutes;