import { Navigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext, useAuth } from "./AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => setUser({ name: username });
    const logout = () => setUser(null);

    const value = { user, login, logout, isAuthenticated: !!user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Protected route component
export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
