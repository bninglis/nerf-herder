import "./UserActions.scss";
import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function UserActions({ userChoice, setLoggedInUser }) {
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [enteredUsername, setEnteredUsername] = useState("");
    const newUserId = uuid();
    const handleLoginUser = (e) => {
        e.preventDefault();
        axios.get(`${apiUrl}/users/login/${enteredUsername}`).then((response) => {
            const userKeys = Object.keys(response.data[0]);
            userKeys.shift();
            localStorage.setItem("users_id", response.data[0].id);
            console.log(response.data[0]);
            setLoggedInUser(response.data[0].id);
            userKeys.forEach((key) => {
                localStorage.setItem(key, response.data[0][key]);
            });
        });
    };
    const handleUsernameEntry = (e) => {
        setEnteredUsername(e.target.value);
    };
    const handleCreateUser = (e) => {
        e.preventDefault();
        const newUserObject = { id: newUserId, username: enteredUsername, password: "", email: "" };
        axios.post(`${apiUrl}/users/`, newUserObject).then((response) => {
            console.log(response.data);
        });
    };
    if (userChoice === "login") {
        return (
            <div>
                <h2>Welcome Back</h2>
                <div>
                    <form onSubmit={handleLoginUser}>
                        <label htmlFor="usernameLogin">Username:</label>
                        <input
                            type="text"
                            name="usernameLogin"
                            value={enteredUsername}
                            onChange={handleUsernameEntry}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    } else if (userChoice === "create") {
        return (
            <div>
                <h2>Create a Username:</h2>
                <div>
                    <form onSubmit={handleCreateUser}>
                        <label htmlFor="usernameCreate">Username:</label>
                        <input
                            type="text"
                            name="usernameCreate"
                            value={enteredUsername}
                            onChange={handleUsernameEntry}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
