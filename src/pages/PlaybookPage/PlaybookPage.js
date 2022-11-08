import "./PlaybookPage.scss";
import SelectionSlides from "../../components/SelectionSlides/SelectionSlides";
import BlockForm from "../../components/BlockForm/BlockForm";
import GalacticIDForm from "../../components/GalacticIDForm/GalacticIDForm";
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";
import Projector from "../../components/SelectionSlides/Projector/Projector";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PlaybookPage({ sendState }) {
    const isLoadedCharacter = localStorage.getItem("loadCharacter");
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [refData, setRefData] = useState(null);
    const [projectorPosition, setProjectorPosition] = useState(false);
    const [formStage, setFormStage] = useState(sendState);
    const [characterData, setCharacterData] = useState({ friend: { id: "" }, rival: { id: "" } });
    const [incompleteSections, setIncompleteSections] = useState({
        name: true,
        history: {
            heritages: true,
            backgrounds: true,
            vices: true,
        },
        people: { friend: true, rival: true },
        actions: true,
    });
    const [formErrors, setFormErrors] = useState({
        first: false,
        last: false,
        alias: false,
        look: false,
        heritages: false,
        backgrounds: false,
        vices: false,
        friend: false,
        rival: false,
        actions: false,
    });

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

    useEffect(() => {
        let tempRef = {};
        if (!!isLoadedCharacter) {
            setFormStage(3);
            const playbookID = localStorage.getItem("playbooks_id");
            axios.get(`${apiUrl}/ref/${playbookID}`).then((response) => {
                setRefData(response.data);
                tempRef = response.data;
                let tempCharacterData = null;
                tempCharacterData = {
                    friend: { name: localStorage.getItem("close_friend") },
                    friend_story: localStorage.getItem("close_friend_story"),
                    rival: { name: localStorage.getItem("rival") },
                    rival_story: localStorage.getItem("rival_story"),
                    playbookActions: localStorage.getItem("playbook_actions").split("|"),
                    playbookID: localStorage.getItem("playbooks_id"),
                    playbook: localStorage.getItem("playbook"),
                    abilityID: localStorage.getItem("special_abilities_id"),
                };
                const tempSpecialAbility = tempRef.special_abilities.find((item) => {
                    return (item.id = tempCharacterData.abilityID);
                });
                tempCharacterData = {
                    ...tempCharacterData,
                    abilityName: tempSpecialAbility.name,
                    firstName: localStorage.getItem("first_name"),
                    lastName: localStorage.getItem("last_name"),
                    alias: localStorage.getItem("alias"),
                    look: localStorage.getItem("look"),
                    heritages_id: localStorage.getItem("heritages_id"),
                    backgrounds_id: localStorage.getItem("backgrounds_id"),
                    vices_id: localStorage.getItem("vices_id"),
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
                    heritage_story: localStorage.getItem("heritage_story"),
                    background: tempBackground.type,
                    background_story: localStorage.getItem("background_story"),
                    vice: tempVice.type,
                    vice_story: localStorage.getItem("vice_story"),
                    actionsObject: {
                        attune: localStorage.getItem("attune"),
                        command: localStorage.getItem("command"),
                        consort: localStorage.getItem("consort"),
                        doctor: localStorage.getItem("doctor"),
                        hack: localStorage.getItem("hack"),
                        helm: localStorage.getItem("helm"),
                        rig: localStorage.getItem("rig"),
                        scramble: localStorage.getItem("scramble"),
                        scrap: localStorage.getItem("scrap"),
                        skulk: localStorage.getItem("skulk"),
                        study: localStorage.getItem("study"),
                        sway: localStorage.getItem("sway"),
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
                setCharacterData(tempCharacterData);
            });
        }
    }, []);

    const handleSelectPlaybook = (e, currentPlaybook, id, playbook) => {
        setCharacterData({ ...characterData, playbooks_id: id });
        axios.get(`${apiUrl}/ref/${id}`).then((response) => {
            setRefData(response.data);
            const actionsUsable = response.data.playbook[0].starting_actions.split(" ");
            setCharacterData({
                ...characterData,
                actions: [
                    actionsUsable[0].toLowerCase(),
                    actionsUsable[0].toLowerCase(),
                    actionsUsable[2].toLowerCase(),
                ].sort(),
                playbookActions: [
                    actionsUsable[0].toLowerCase(),
                    actionsUsable[0].toLowerCase(),
                    actionsUsable[2].toLowerCase(),
                ].sort(),
                playbookID: id,
                playbook: playbook,
            });
        });
    };

    const handleNextStage = () => {
        window.scrollTo(0, 0);
        setFormStage(formStage + 1);
    };

    const handleItemSelection = (
        e,
        abilityID,
        abilityName,
        abilityDescription,
        abilityClarification,
        startingAbility,
        startingAbilitySummary,
        startingAbilityClarification,
        actions
    ) => {
        if (!actions) {
            setCharacterData({
                ...characterData,
                abilityID: abilityID,
                abilityName: abilityName,
                abilityDescription: abilityDescription,
                abilityClarification: abilityClarification,
                startingAbility: startingAbility,
                startingAbilitySummary: startingAbilitySummary,
                startingAbilityClarification: startingAbilityClarification,
                actions: [...characterData.actions].sort(),
                actionsStrings: generateActionsStrings(characterData.actions, []),
            });
        } else {
            setCharacterData({
                ...characterData,
                abilityID: abilityID,
                abilityName: abilityName,
                abilityDescription: abilityDescription,
                abilityClarification: abilityClarification,
                startingAbility: startingAbility,
                startingAbilitySummary: startingAbilitySummary,
                startingAbilityClarification: startingAbilityClarification,
                actions: [...characterData.actions, ...actions].sort(),
                actionsStrings: generateActionsStrings(actions, characterData.actions),
            });
        }
    };

    const handleNameSubmit = (e, names) => {
        e.preventDefault();
        const setErrors = (testObject, testKey) => {
            if (testObject[testKey] === "") {
                return true;
            }
        };
        if (names.first !== "" && names.last !== "" && names.alias !== "" && names.look !== "") {
            setCharacterData({
                ...characterData,
                firstName: names.first,
                lastName: names.last,
                alias: names.alias,
                look: names.look,
            });
            setFormErrors({
                ...formErrors,
                first: false,
                last: false,
                alias: false,
                look: false,
            });
            let tempSections = incompleteSections;
            tempSections.name = false;
            // setIdComple/tion({ ...idComp/letion, name: true });
        } else {
            let tempFormErrors = formErrors;
            Object.keys(names).forEach((key) => {
                tempFormErrors = { ...tempFormErrors, [key]: setErrors(names, key) };
            });
            setFormErrors(tempFormErrors);
        }
    };

    const handleHistorySectionSubmission = (e, section, id, choice, singular, entry) => {
        e.preventDefault();
        if (!!entry) {
            setCharacterData({
                ...characterData,
                [singular]: choice,
                [`${section}_id`]: id,
                [`${singular}_story`]: entry,
            });
            let tempSections = incompleteSections;
            tempSections["history"][section] = false;
            setIncompleteSections(tempSections);
            setFormErrors({ ...formErrors, [section]: false });
        } else {
            e["target"][`${section}-field`]["placeholder"] = "Cannot be blank";
            setFormErrors({ ...formErrors, [section]: true });
        }
    };

    const handleSubmitPerson = (e, relationship, id, person, story) => {
        e.preventDefault();
        const opposite = relationship === "friend" ? "rival" : "friend";
        if (story !== "") {
            setCharacterData({
                ...characterData,
                [relationship]: { name: person, id: id },
                [`${relationship}_story`]: story,
            });
            let tempSections = incompleteSections;
            tempSections["people"][relationship] = false;
            setFormErrors({ ...formErrors, [relationship]: false });
            setIncompleteSections(tempSections);
        } else {
            e["target"][`${relationship}field`]["placeholder"] = "Cannot be blank";
            setFormErrors({ ...formErrors, [relationship]: true });
        }
    };

    const handleSubmitActions = (e, actions, pool) => {
        if (pool === 0) {
            let tempArray = Object.entries(actions);
            const actionsArray = [];
            tempArray.forEach((item, index) => {
                if (item[1] > 0) {
                    for (let i = 0; i < item[1]; i++) {
                        actionsArray.push(item[0]);
                    }
                }
            });
            const strings = generateActionsStrings(actionsArray, []);
            setCharacterData({
                ...characterData,
                actions: actionsArray,
                actionsStrings: strings,
                actionsObject: actions,
            });
            let tempSections = incompleteSections;
            tempSections.actions = false;
            setIncompleteSections(tempSections);
        } else {
            setFormErrors({ ...formErrors, actions: true });
        }
    };

    const handleEdit = (e, primaryKey, secondaryKey) => {
        if (!secondaryKey) {
            setIncompleteSections({ ...incompleteSections, [primaryKey]: true });
        }
    };

    const handleChangeAbility = (e) => {
        setFormStage(1);
    };

    const handleChangePlaybook = (e) => {
        setFormStage(0);
    };

    if (formStage === 0) {
        return (
            <div className="character-container">
                <Header />
                <Projector
                    projectorPosition={projectorPosition}
                    handleNextStage={handleNextStage}
                />
                <SelectionSlides
                    handleSelectPlaybook={handleSelectPlaybook}
                    handleNextStage={handleNextStage}
                    apiUrl={apiUrl}
                    setProjectorPosition={setProjectorPosition}
                />
            </div>
        );
    } else if (formStage === 1) {
        return (
            <div className="character-container">
                <Header />
                <Projector projectorPosition={true} />
                <BlockForm
                    refData={refData}
                    handleNextStage={handleNextStage}
                    handleItemSelection={handleItemSelection}
                    handleChangePlaybook={handleChangePlaybook}
                />
            </div>
        );
    } else if (formStage === 2) {
        return (
            <div className="character-container">
                <Header />
                <GalacticIDForm
                    refData={refData}
                    characterData={characterData}
                    setCharacterData={setCharacterData}
                    handleHistorySectionSubmission={handleHistorySectionSubmission}
                    incompleteSections={incompleteSections}
                    handleSubmitPerson={handleSubmitPerson}
                    handleSubmitActions={handleSubmitActions}
                    handleNameSubmit={handleNameSubmit}
                    handleNextStage={handleNextStage}
                    formErrors={formErrors}
                    handleEdit={handleEdit}
                    handleChangeAbility={handleChangeAbility}
                    handleChangePlaybook={handleChangePlaybook}
                />
            </div>
        );
    } else if (formStage === 3 && refData !== null) {
        return (
            <div className="character-container">
                <Header />
                <CharacterSheet
                    characterData={characterData}
                    refData={refData}
                    setFormStage={setFormStage}
                    setCharacterData={setCharacterData}
                />
            </div>
        );
    }
}
