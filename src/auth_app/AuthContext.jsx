import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Register user
    const register = (username, password) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find((u) => u.username === username);
        if (exists) return false;

        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    };

    // Login user
    const login = (username, password) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            return true;
        }

        return false;
    };

    // Logout user
    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedInUser");
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
