import React, { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() !== "") {
            login(username);
            navigate("/profile");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
