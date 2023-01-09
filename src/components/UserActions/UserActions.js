import "./UserActions.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useCookies } from "react-cookie";

export default function UserActions({ userChoice, setUserChoice }) {
    const navigate = useNavigate();
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [enteredUsername, setEnteredUsername] = useState("");
    const newUserId = uuid();
    const [setCookies] = useCookies(["users_id", "username"]);

    const loginProcess = (username) => {
        axios.get(`${apiUrl}users/login/${username}`).then((response) => {
            setCookies("users_id", response.data[0].id, { path: "/", maxAge: 1200 });
            setCookies("username", response.data[0].username, { path: "/", maxAge: 1200 });
            navigate("/user");
        });
        setUserChoice("");
    };

    const handleLoginUser = (e) => {
        e.preventDefault();
        loginProcess(enteredUsername);
    };
    const handleUsernameEntry = (e) => {
        setEnteredUsername(e.target.value);
    };
    const handleCreateUser = (e) => {
        e.preventDefault();
        const newUserObject = { id: newUserId, username: enteredUsername };
        axios
            .post(`${apiUrl}users`, newUserObject)
            .then((response) => {
                loginProcess(enteredUsername);
            })
            .catch((error) => {
                alert(error.response.data);
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
