import { Navigate } from "react-router-dom";

const isAuthenticared = false;

export default function ProtectedRoute({ children }) {
    if (!isAuthenticared) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
