import { useRoutes } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import { useEffect } from "react";

export default function ThemeRoutes() {
    return useRoutes([LoginRoutes, MainRoutes]);
}