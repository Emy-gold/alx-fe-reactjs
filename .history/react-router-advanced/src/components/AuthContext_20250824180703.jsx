import React, { createContext, useContext, useState } from 'react';

// 1️⃣ Create context
const AuthContext = createContext();

// 2️⃣ Provide context
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3️⃣ Custom hook for easier usage
export function useAuth() {
    return useContext(AuthContext);
}
