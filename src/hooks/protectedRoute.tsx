import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import useCredentials from "./useCredentials";
import { ROUTES } from "@/routes/types";

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useCredentials();
  if (!accessToken ) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
