import "./UsersPage.scss";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserActions from "../../components/UserActions/UserActions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";
import Header from "../../components/Header/Header";

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
            <div className="users__container">
                <div className="users">
                    <UserActions userChoice={userChoice} setLoggedInUser={setLoggedInUser} />
                    <div className="users__clickables">
                        <button
                            className="users__button users__button--login"
                            onClick={(e) => {
                                handleChoose(e, "login");
                            }}
                        >
                            {" "}
                            <div className="users__space-text--background"></div>
                            <h3 className="users__space-text">Login</h3>
                        </button>
                        <button
                            className="users__button users__button--create"
                            onClick={(e) => {
                                handleChoose(e, "create");
                            }}
                        >
                            {" "}
                            <div className="users__space-text--background"></div>
                            <h3 className="users__space-text">Create User</h3>
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="users__container">
                <div className="users">
                    <DeleteModal
                        isDeleteVisible={isDeleteVisible}
                        setIsDeleteVisible={setIsDeleteVisible}
                        apiUrl={apiUrl}
                    />
                    {userCharacters &&
                        userCharacters.map((character) => {
                            return (
                                <div className="character-item" key={character.id}>
                                    <button
                                        className="character-item__edit"
                                        onClick={(e) => {
                                            handleLoadCharacter(e, character.id);
                                        }}
                                    >
                                        <div>
                                            <h3 className="character-item__name">
                                                {character.first_name} {character.last_name}
                                            </h3>
                                            <h4 className="character-item__alias">{character.alias}</h4>
                                            <h5 className="character-item__playbook">{character.playbook}</h5>
                                        </div>
                                    </button>
                                    <button
                                        className="character-item__delete"
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
                            className="users__button users__button--login"
                            onClick={(e) => {
                                handleChoose(e, "login");
                            }}
                        >
                            {" "}
                            <div className="users__space-text--background"></div>
                            <h3 className="users__space-text">Login</h3>
                            Login
                        </button>
                        <button
                            className="users__button users__button--create"
                            onClick={(e) => {
                                handleChoose(e, "create");
                            }}
                        >
                            {" "}
                            <div className="users__space-text--background"></div>
                            <h3 className="users__space-text">Create User</h3>
                            Create User
                        </button>
                        <div className="new__fix">
                            <Link className="new__link" to={"/character"}>
                                <button
                                    className="users__button users__button--spacer"
                                    onClick={(e) => {
                                        handleChoose(e, "create");
                                    }}
                                >
                                    {" "}
                                    <div className="users__space-text--background"></div>
                                    <h3 className="users__space-text">Create New Spacer</h3>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
