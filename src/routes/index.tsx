import { Navigate, useRoutes } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import { useEffect } from "react";

export default function ThemeRoutes() {
    return useRoutes(
        [
            {
                path: '/',
                element: <Navigate to="/login" replace />
            },
            LoginRoutes, 
            MainRoutes
        ]
    );
}