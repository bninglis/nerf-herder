import "./UserActions.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function UserActions({ userChoice, setLoggedInUser }) {
    const navigate = useNavigate();
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
            setLoggedInUser(response.data[0].id);
            userKeys.forEach((key) => {
                localStorage.setItem(key, response.data[0][key]);
            });
            navigate("/user");
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
                <h2 className="users__title">Welcome Back</h2>
                <div>
                    <form className="users__form" onSubmit={handleLoginUser}>
                        <label htmlFor="usernameLogin">Username:</label>
                        <input
                            className="users__input"
                            type="text"
                            name="usernameLogin"
                            value={enteredUsername}
                            onChange={handleUsernameEntry}
                        />
                        <button className="users__submit" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    } else if (userChoice === "create") {
        return (
            <div>
                <h2 className="users__title">Create a Username:</h2>
                <form className="users__form" onSubmit={handleCreateUser}>
                    <label htmlFor="usernameCreate">Username:</label>
                    <input
                        className="users__input"
                        type="text"
                        name="usernameCreate"
                        value={enteredUsername}
                        onChange={handleUsernameEntry}
                    />
                    <button className="users__submit" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
