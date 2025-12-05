import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (user) return <Navigate to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);

        if (success) {
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
