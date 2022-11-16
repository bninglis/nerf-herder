import "./GalacticIDFormPage.scss";
import GalacticIDForm from "../../components/GalacticIDForm/GalacticIDForm";
import ProjectorStationary from "../../components/ProjectorStationary/ProjectorStationary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function GalacticIDFormPage() {
    // const BACKEND_URL = process.env.REACT_APP_URL;
    // const BACKEND_PORT = process.env.REACT_APP_PORT;
    // const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [cookies, setCookie] = useCookies(["characterData"]);
    const characterDataInit = cookies.characterData;
    const [characterData, setCharacterData] = useState(characterDataInit);
    const refData = JSON.parse(sessionStorage.getItem("refData"));
    console.log("new refData: ", refData);
    const navigate = useNavigate();
    console.log(characterData);
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

    // a different validation
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

    // almost all of this useEffect is for loading opened character data from the server

    const handleNextStage = () => {
        setCookie("characterData", characterData, {
            path: "/",
        });
        navigate("/final");
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

    const handleChangeAbility = (e) => {};

    const handleChangePlaybook = (e) => {};

    if (!refData) {
        return (
            <div className="character__container">
                <ProjectorStationary projectorPosition={true} />
                <div className="character"></div>
            </div>
        );
    } else {
        return (
            <div className="character__container">
                <ProjectorStationary projectorPosition={true} />
                <div className="character">
                    <div className="desktop-boundary">
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
                </div>
            </div>
        );
    }
}
