import "./CharacterSheet.scss";
import pipFilled from "../../assets/icons/pip-filled.svg";
import pipEmpty from "../../assets/icons/pip-empty.svg";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import LoginDisplay from "./LoginDisplay/LoginDisplay";
import { useNavigate } from "react-router-dom";

export default function CharacterSheet({ characterData, refData, setFormStage, setCharacterData }) {
    const navigate = useNavigate();
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    let {
        firstName,
        lastName,
        alias,
        look,
        heritage,
        heritage_story,
        background,
        background_story,
        vice,
        vice_story,
        friend,
        rival,
        abilityName,
        abilityDescription,
        abilityClarification,
        actionsObject,
        startingAbility,
        startingAbilitySummary,
        startingAbilityClarification,
    } = characterData;
    const userId = localStorage.getItem("users_id");
    const { playbook: playbookArray, items } = refData;
    const playbook = playbookArray[0];
    const actionsArray = Object.entries(actionsObject);
    const actionNames = Object.keys(actionsObject);

    const [loginDisplayToggle, setLoginDisplayToggle] = useState(false);
    const [characterSubmission, setCharacterSubmission] = useState(null);
    const makeMappingArray = (array) => {
        let tempObject = {};
        array.forEach((item) => {
            for (let i = 0; i < item[1]; i++) {
                item.push("filled");
            }
            for (let i = item.length; i < 5; i++) {
                item.push("empty");
            }
            item.splice(1, 1);
            let key = item.shift();
            tempObject[key] = item;
        });
        return tempObject;
    };
    const mappingArray = makeMappingArray(actionsArray);
    const isLoaded = localStorage.getItem("loadCharacter");
    useEffect(() => {
        let newId = null;
        if (!!isLoaded) {
            const special = refData.special_abilities.find((ability) => {
                return ability.id === localStorage.getItem("special_abilities_id");
            });
            setCharacterData({
                ...characterData,
                startingAbility: refData.playbook[0].starting_ability,
                startingAbilitySummary: refData.playbook[0].starting_ability_summary,
                startingAbilityClarification: refData.playbook[0].starting_ability_clarification,
                abilityName: special.name,
                abilityDescription: special.description,
                abilityClarification: special.clarification,
            });
            newId = localStorage.getItem("id");
        } else {
            newId = uuid();
        }
        setCharacterSubmission({
            id: newId,
            users_id: userId,
            playbooks_id: playbook.id,
            special_abilities_id: characterData.abilityID,
            heritages_id: characterData.heritages_id,
            heritage_story: characterData.heritage_story,
            backgrounds_id: characterData.backgrounds_id,
            background_story: characterData.background_story,
            close_friend: characterData.friend.name,
            close_friend_story: characterData.friend_story,
            rival: characterData.rival.name,
            rival_story: characterData.rival_story,
            vices_id: characterData.vices_id,
            vice_story: characterData.vice_story,
            first_name: characterData.firstName,
            last_name: characterData.lastName,
            alias: characterData.alias,
            look: characterData.look,
            playbook_actions: characterData.playbookActions.join("|"),
            attune: characterData.actionsObject.attune,
            command: characterData.actionsObject.command,
            consort: characterData.actionsObject.consort,
            doctor: characterData.actionsObject.doctor,
            hack: characterData.actionsObject.hack,
            helm: characterData.actionsObject.helm,
            rig: characterData.actionsObject.rig,
            scramble: characterData.actionsObject.scramble,
            scrap: characterData.actionsObject.scrap,
            skulk: characterData.actionsObject.skulk,
            study: characterData.actionsObject.study,
            sway: characterData.actionsObject.sway,
            playbook: characterData.playbook,
        });
    }, []);
    const handleSave = () => {
        if (!userId) {
            setLoginDisplayToggle(!loginDisplayToggle);
            const submissionKeys = Object.keys(characterSubmission);
            submissionKeys.forEach((key) => {
                localStorage.setItem(key, characterSubmission[key]);
            });
            localStorage.setItem("loadCharacter", true);
        }
        axios.post(`${apiUrl}/users/characters`, characterSubmission).then((response) => {
            let tempUser = [localStorage.getItem("users_id"), localStorage.getItem("username")];
            localStorage.clear();
            localStorage.setItem("users_id", tempUser[0]);
            localStorage.setItem("username", tempUser[1]);
            navigate("/user");
        });
    };

    const handleMakeChanges = () => {
        setFormStage(2);
    };

    return (
        <>
            <div className="final-id">
                <LoginDisplay
                    setLoginDisplayToggle={setLoginDisplayToggle}
                    loginDisplayToggle={loginDisplayToggle}
                />
                <div>
                    <h2>Galactic ID</h2>
                </div>
                <div>
                    <svg
                        className="profile__placeholder"
                        xmlns="http://www.w3.org/2000/svg"
                        width="340"
                        height="340"
                    >
                        <path d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0" />
                    </svg>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{alias}</p>
                    <p>{look}</p>
                </div>
                <div>
                    <h3>Heritage</h3>
                    <h4>{heritage}</h4>
                    <p>{heritage_story}</p>
                </div>
                <div>
                    <h3>Background</h3>
                    <h4>{background}</h4>
                    <p>{background_story}</p>
                </div>
                <div>
                    <h3>Vice</h3>
                    <h4>{vice}</h4>
                    <p>{vice_story}</p>
                </div>
                <div>
                    <div>
                        <h3>Associate</h3>
                        <p>{friend.name}</p>
                        <p>{friend.story}</p>
                    </div>
                    <div>
                        <h3>Rival</h3>
                        <p>{rival.name}</p>
                        <p>{rival.story}</p>
                    </div>
                </div>
                <div>
                    <h3>Abilities</h3>
                    <div>
                        <h4>{startingAbility}</h4>
                        <p>{startingAbilitySummary}</p>
                        <p>{startingAbilityClarification}</p>
                    </div>
                    <div>
                        <h4>{abilityName}</h4>
                        <p>{abilityDescription}</p>
                        <p>{abilityClarification}</p>
                    </div>
                </div>
                <div>
                    {actionNames &&
                        actionNames.map((name) => {
                            return (
                                <div key={`${name}action`}>
                                    <h4>{name}</h4>
                                    <div>
                                        {mappingArray[name] &&
                                            mappingArray[name].map((pip, index) => {
                                                return (
                                                    <img
                                                        src={
                                                            pip === "filled" ? pipFilled : pipEmpty
                                                        }
                                                        alt="filled action icon"
                                                        key={`${name}pip${index}`}
                                                        className="pip"
                                                    ></img>
                                                );
                                            })}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div>
                <div>
                    <h4>{characterData.playbook}s in action</h4>
                    <p>{playbook.playing_advice}</p>
                </div>
                <div>
                    <h4>Xeno {characterData.playbook}s</h4>
                    <p>{playbook.xeno_advice}</p>
                </div>
                <div>
                    <h4>{characterData.playbook} Items</h4>
                    <p>{playbook.items_description}</p>
                    {items &&
                        items.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h5>{item.item}</h5>
                                    <p>{item.description}</p>
                                </div>
                            );
                        })}
                </div>
                <div>
                    <button onClick={handleSave}>Save Character</button>
                    <button onClick={handleMakeChanges}>Edit Character</button>
                </div>
            </div>
        </>
    );
}
