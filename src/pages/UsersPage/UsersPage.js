import "./UsersPage.scss";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserActions from "../../components/UserActions/UserActions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

export default function UsersPage({ setSendState }) {
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const navigate = useNavigate();
    const [userChoice, setUserChoice] = useState("");
    const user = localStorage.getItem("users_id");
    const [userCharacters, setUserCharacters] = useState(null);
    const [isDeleteVisible, setIsDeleteVisible] = useState({ toggle: false, character: "" });
    const [loggedInUser, setLoggedInUser] = useState("");
    useEffect(() => {
        if (!!user) {
            axios.get(`${apiUrl}/users/user/${user}/characters`).then((response) => {
                setUserCharacters(response.data);
            });
        }
    }, [isDeleteVisible, user]);
    const handleChoose = (e, choice) => {
        setUserChoice(choice);
    };
    const handleLoadCharacter = (e, id) => {
        axios.get(`${apiUrl}/users/characters/${id}`).then((response) => {
            setSendState(3);
            localStorage.setItem("loadCharacter", true);
            Object.keys(response.data[0]).forEach((key) => {
                localStorage.setItem(key, response.data[0][key]);
            });
            navigate("/character/");
        });
    };

    const handleDeleteCharacter = (e, id, first, last) => {
        setIsDeleteVisible({ toggle: true, character: { id: id, first: first, last: last } });
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
                <DeleteModal
                    isDeleteVisible={isDeleteVisible}
                    setIsDeleteVisible={setIsDeleteVisible}
                    apiUrl={apiUrl}
                />
                {userCharacters &&
                    userCharacters.map((character) => {
                        return (
                            <div key={character.id}>
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
                                <button
                                    onClick={(e) => {
                                        handleDeleteCharacter(
                                            e,
                                            character.id,
                                            character.first_name,
                                            character.last_name
                                        );
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
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
                    <Link to={"/character"}>
                        <button>Create a New Spacer</button>
                    </Link>
                </div>
            </div>
        );
    }
}
