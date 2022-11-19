import "./UsersPage.scss";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserActions from "../../components/UserActions/UserActions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function UsersPage({ setLoadCharacterData }) {
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [cookies, setCookies] = useCookies(["users_id", "username", "characterData"]);

    const navigate = useNavigate();
    const [userChoice, setUserChoice] = useState("");
    const user = cookies.users_id;
    const username = cookies.username;
    const [userCharacters, setUserCharacters] = useState(null);
    const [isDeleteVisible, setIsDeleteVisible] = useState({ toggle: false, character: "" });

    const generateActionsStrings = (array1, array2) => {
        const buildArrayOnes = [];
        const buildArrayTwos = [];
        const unstringed = array1.concat(array2).sort();
        unstringed.forEach((item, index) => {
            if (index < unstringed.lastIndexOf(item)) {
                buildArrayTwos.push(item + " +2");
            } else if (index > unstringed.indexOf(item)) {
                return;
            } else {
                buildArrayOnes.push(item + " +1");
            }
        });
        return [
            buildArrayTwos.concat(buildArrayOnes).join(", "),
            buildArrayTwos.concat(buildArrayOnes),
        ];
    };

    // almost all of this useEffect is for loading opened character data from the server
    function loadAChar(id) {
        axios.get(`${apiUrl}/users/characters/${id}`).then((response) => {
            const tempRef = response.data.refData;
            const rawCharacterData = response.data.characterData;
            let tempCharacterData = null;
            tempCharacterData = {
                id: rawCharacterData.id,
                users_id: rawCharacterData.users_id,
                friend: {
                    name: rawCharacterData.close_friend,
                    portraitPath: rawCharacterData.close_friend_portrait,
                },
                friend_story: rawCharacterData.close_friend_story,
                rival: {
                    name: rawCharacterData.rival,
                    portraitPath: rawCharacterData.rival_portrait,
                },
                rival_story: rawCharacterData.rival_story,
                playbookActions: rawCharacterData.playbook_actions.split("|"),
                playbookID: rawCharacterData.playbooks_id,
                playbook: rawCharacterData.playbook,
                abilityID: rawCharacterData.special_abilities_id,
            };
            const tempSpecialAbility = tempRef.special_abilities.find((item) => {
                return (item.id = tempCharacterData.abilityID);
            });
            tempCharacterData = {
                ...tempCharacterData,
                abilityName: tempSpecialAbility.name,
                firstName: rawCharacterData.first_name,
                lastName: rawCharacterData.last_name,
                alias: rawCharacterData.alias,
                look: rawCharacterData.look,
                heritages_id: rawCharacterData.heritages_id,
                backgrounds_id: rawCharacterData.backgrounds_id,
                vices_id: rawCharacterData.vices_id,
            };
            const tempHeritage = tempRef.heritages.find((item) => {
                return (item.id = tempCharacterData.heritages_id);
            });
            const tempBackground = tempRef.backgrounds.find((item) => {
                return (item.id = tempCharacterData.backgrounds_id);
            });
            const tempVice = tempRef.vices.find((item) => {
                return (item.id = tempCharacterData.vices_id);
            });
            tempCharacterData = {
                ...tempCharacterData,
                heritage: tempHeritage.type,
                heritage_story: rawCharacterData.heritage_story,
                background: tempBackground.type,
                background_story: rawCharacterData.background_story,
                vice: tempVice.type,
                vice_story: rawCharacterData.vice_story,
                actionsObject: {
                    attune: rawCharacterData.attune,
                    command: rawCharacterData.command,
                    consort: rawCharacterData.consort,
                    doctor: rawCharacterData.doctor,
                    hack: rawCharacterData.hack,
                    helm: rawCharacterData.helm,
                    rig: rawCharacterData.rig,
                    scramble: rawCharacterData.scramble,
                    scrap: rawCharacterData.scrap,
                    skulk: rawCharacterData.skulk,
                    study: rawCharacterData.study,
                    sway: rawCharacterData.sway,
                },
            };
            const tempObject = tempCharacterData.actionsObject;
            const tempKeys = Object.keys(tempObject);
            const actionsArray = [];
            tempKeys.forEach((key) => {
                for (let i = 0; i < tempObject[key]; i++) {
                    actionsArray.push(key);
                }
            });
            tempCharacterData = {
                ...tempCharacterData,
                actionsArray: actionsArray,
                actions: actionsArray,
                actionsStrings: generateActionsStrings(actionsArray, []),
            };
            sessionStorage.setItem("refData", JSON.stringify(tempRef));
            async function setCharacterCookies(data) {
                setCookies("characterData", tempCharacterData, { path: "/" });
                const cookiesDone = await cookies.characterData;
            }
            setCharacterCookies(tempCharacterData);
            setCookies("characterData", tempCharacterData, { path: "/" });
            setLoadCharacterData(tempCharacterData);
        });
    }

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
        loadAChar(id);
        const intervalID = setInterval(() => {
            if (!!cookies.characterData) {
                clearInterval(intervalID);
                for (let i = intervalID; i >= 0; i--) {
                    clearInterval(i);
                }
                navigate("/final");
            }
        }, [100]);
    };

    const handleDeleteCharacter = (e, id, first, last) => {
        setIsDeleteVisible({ toggle: true, character: { id: id, first: first, last: last } });
    };

    if (!user) {
        return (
            <div className="users__container">
                <div className="users">
                    <UserActions userChoice={userChoice} setUserChoice={setUserChoice} />
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
                    <h2>Welcome {username}</h2>
                    <ul className="users__characters">
                        {userCharacters &&
                            userCharacters.map((character) => {
                                return (
                                    <li className="character-item" key={character.id}>
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
                                                <h4 className="character-item__alias">
                                                    "{character.alias}"
                                                </h4>
                                                <h5 className="character-item__playbook">
                                                    {character.playbook}
                                                </h5>
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
                                    </li>
                                );
                            })}
                    </ul>
                    <div>
                        <UserActions userChoice={userChoice} setUserChoice={setUserChoice} />
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
                            <Link className="new__link" to={"/playbook/true"}>
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
