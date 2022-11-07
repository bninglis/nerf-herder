import "./UsersPage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserActions from "../../components/UserActions/UserActions";
import axios from "axios";

export default function UsersPage() {
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const navigate = useNavigate();
    const [userChoice, setUserChoice] = useState("");
    const user = localStorage.getItem("users_id");
    const [userCharacters, setUserCharacters] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState("");
    useEffect(() => {
        if (!!user) {
            axios.get(`${apiUrl}/users/user/${user}/characters`).then((response) => {
                setUserCharacters(response.data);
            });
        }
    }, []);
    const handleChoose = (e, choice) => {
        setUserChoice(choice);
    };
    const handleLoadCharacter = (e, id) => {
        axios.get(`${apiUrl}/users/characters/${id}`).then((response) => {
            console.log(response.data);
            Object.keys(response.data[0]).forEach((key) => {
                localStorage.setItem(key, response.data[0][key]);
            });
            localStorage.setItem("loadCharacter", true);
        });
        navigate("/new");
    };

    if (!user) {
        return (
            <div>
                <UserActions userChoice={userChoice} setLoggedInUser={setLoggedInUser} />
                <button
                    onClick={(e) => {
                        handleChoose(e, "login");
                    }}
                >
                    Login
                </button>
                <button
                    onClick={(e) => {
                        handleChoose(e, "create");
                    }}
                >
                    Create User
                </button>
            </div>
        );
    } else {
        return (
            <div>
                {userCharacters &&
                    userCharacters.map((character) => {
                        return (
                            <button
                                onClick={(e) => {
                                    handleLoadCharacter(e, character.id);
                                }}
                            >
                                <div>
                                    <h3>
                                        {character.first_name} {character.last_name}
                                    </h3>
                                    <h4>{character.alias}</h4>
                                    <h5>{character.playbook}</h5>
                                </div>
                            </button>
                        );
                    })}
                <div>
                    <UserActions userChoice={userChoice} setLoggedInUser={setLoggedInUser} />
                    <button
                        onClick={(e) => {
                            handleChoose(e, "login");
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={(e) => {
                            handleChoose(e, "create");
                        }}
                    >
                        Create User
                    </button>
                </div>
            </div>
        );
    }
}
