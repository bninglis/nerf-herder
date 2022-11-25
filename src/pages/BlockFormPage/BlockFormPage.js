import "./BlockFormPage.scss";
import BlockForm from "../../components/BlockForm/BlockForm";
import ProjectorStationary from "../../components/ProjectorStationary/ProjectorStationary";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function PlaybookPage() {
    const navigate = useNavigate();
    const { id: paramsID } = useParams();
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [projectorPosition, setProjectorPosition] = useState(true);
    const [characterData, setCharacterData] = useState();
    const [refData, setRefData] = useState();
     // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(["characterData", "refData"]);

    useEffect(() => {
        setCharacterData({ ...characterData, playbooks_id: paramsID });
        axios.get(`${apiUrl}/ref/${paramsID}`).then((response) => {
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
                playbookID: paramsID,
                playbook: response.data.playbook[0].playbook,
            });
        });
         // eslint-disable-next-line
    }, []);

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

    const handleNextStage = () => {
        setCookie("characterData", characterData, {
            path: "/",
        });
        sessionStorage.setItem("refData", JSON.stringify(refData));
        navigate("/idform");
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

    const handleChangePlaybook = (e) => {
        setProjectorPosition(false);
        // navigate("/playbook");
    };

    if (!refData) {
        return (
            <div className="character__container">
                <ProjectorStationary projectorPosition={projectorPosition} />
                <div className="character"></div>
            </div>
        );
    } else {
        return (
            <div className="character__container">
                <ProjectorStationary projectorPosition={projectorPosition} />
                <div className="character">
                    <div className="desktop-boundary">
                        <BlockForm
                            refData={refData}
                            handleNextStage={handleNextStage}
                            handleItemSelection={handleItemSelection}
                            handleChangePlaybook={handleChangePlaybook}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
