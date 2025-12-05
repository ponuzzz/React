import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = register(username, password);

        if (success) {
            alert("Registration successful. Please login.");
            navigate("/login");
        } else {
            alert("User already exists.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Register</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br /><br/>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
