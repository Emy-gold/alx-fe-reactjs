import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext(null);

// Hook to use auth context
export function useAuth() {
    return useContext(AuthContext);
}

// Provider to wrap the app
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    const value = { user, login, logout, isAuthenticated: !!user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
