import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function ProtectedRoute({ children }) {
    const { user } = useAuth(); // safe now
    if (!user) return <Navigate to="/login" replace />;
    return children;
}

export default ProtectedRoute;


