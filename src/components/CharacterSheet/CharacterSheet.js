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

    console.log(characterData);

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
                <div className="final-id__title">
                    <h2>Galactic ID</h2>
                </div>
                <div className="final-id__profile">
                    <svg
                        className="final-id__pfp"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="1 0.5 338 338"
                    >
                        <path d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"></path>
                    </svg>
                    <p className="final-id__text">
                        {firstName} "{alias}" {lastName}
                    </p>
                    <p className="final-id__text">Description:</p>
                    <p className="final-id__text">{look}</p>
                </div>
                <div className="final-id__group">
                    <div className="final-id__heritage final-id__segment">
                        <h3 className="final-id__header">Heritage</h3>
                        <div className="final-id__data">
                            <h4 className="final-id__subheader">{heritage}</h4>
                            <p className="final-id__text">{heritage_story}</p>
                        </div>
                    </div>
                    <div className="final-id__background final-id__segment">
                        <h3 className="final-id__header">Background</h3>
                        <div className="final-id__data">
                            <h4 className="final-id__subheader">{background}</h4>
                            <p className="final-id__text">{background_story}</p>
                        </div>
                    </div>
                    <div className="final-id__vice final-id__segment">
                        <h3 className="final-id__header">Vice</h3>
                        <div className="final-id__data">
                            <h4 className="final-id__subheader">{vice}</h4>
                            <p className="final-id__text">{vice_story}</p>
                        </div>
                    </div>
                    <div className="final-id__people">
                        <div className="final-id__friend final-id__segment">
                            <h3 className="final-id__header">Associate</h3>
                            <div className="final-id__data">
                                <p className="final-id__text">{friend.name}</p>
                                <p className="final-id__text">{friend.story}</p>
                            </div>
                        </div>
                        <div className="final-id__rival final-id__segment">
                            <h3 className="final-id__header">Rival</h3>
                            <div className="final-id__data">
                                <p className="final-id__text">{rival.name}</p>
                                <p className="final-id__text">{rival.story}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="final-id__abilities final-id__segment">
                    <h3 className="final-id__header">Abilities</h3>
                    <div className="final-id__starting-ability">
                        <h4 className="final-id__subheader">{startingAbility}</h4>
                        <p className="final-id__text cyan bold">{startingAbilitySummary}</p>
                        <p className="final-id__text">{startingAbilityClarification}</p>
                    </div>
                    <div className="final-id__special-ability final-id__segment">
                        <h4 className="final-id__subheader final-id__subheader--special-ability">
                            {abilityName}
                        </h4>
                        <p className="final-id__text cyan bold">{abilityDescription}</p>
                        <p className="final-id__text">{abilityClarification}</p>
                    </div>
                </div>
                <div className="final-id__actions">
                    {actionNames &&
                        actionNames.map((name) => {
                            return (
                                <div
                                    className={`final-id__action final-id__action--${name}`}
                                    key={`${name}action`}
                                >
                                    <h4 className="final-id__subheader">{name}</h4>
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
                <div className="final-id__choices">
                    <button className="final-id__button" onClick={handleSave}>
                        Save Character
                    </button>
                    <button className="final-id__button" onClick={handleMakeChanges}>
                        Edit Character
                    </button>
                </div>
            </div>
            <div className="final-id__extras">
                <div className="final-id__written">
                    <div className="final-id__play-advice">
                        <h4 className="final-id__subheader">{characterData.playbook}s in action</h4>
                        <p className="final-id__text">{playbook.playing_advice}</p>
                    </div>
                    <div className="final-id__xeno-advice">
                        <h4 className="final-id__subheader">Xeno {characterData.playbook}s</h4>
                        <p className="final-id__text">{playbook.xeno_advice}</p>
                    </div>
                    <div className="final-id__items">
                        <h4 className="final-id__subheader">{characterData.playbook} Items</h4>
                        <p className="final-id__text">{playbook.items_description}</p>
                        <ul className="final-id__item-list">
                            {items &&
                                items.map((item) => {
                                    return (
                                        <li className="final-id__item" key={item.id}>
                                            <h5 className="final-id__subheader">{item.item}</h5>
                                            <p className="final-id__item-text">
                                                {item.description}
                                            </p>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
