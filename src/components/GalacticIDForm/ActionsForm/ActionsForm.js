import "./ActionsForm.scss";
import Action from "./Action/Action";
import pipEmpty from "../../../assets/icons/pip-empty.svg";
import pipFilled from "../../../assets/icons/pip-filled.svg";
import { useState } from "react";

export default function ActionsForm({
    actions: propActions,
    characterData,
    handleSubmitActions,
    formErrors,
    idCompletion,
}) {
    let { actions: characterActions } = characterData;
    const tabulateActions = (array1, array2) => {
        const lowercaseArray = array1.map((item) => {
            return item.toLowerCase();
        });
        let actionList = {};
        array2.forEach((item) => {
            actionList = { ...actionList, [item.action]: 0 };
        });
        lowercaseArray.forEach((stat) => {
            actionList[stat] = actionList[stat] - -1;
        });
        return actionList;
    };
    const createMappingArray = (value) => {
        const empty = 4 - value;
        let tempArray = [];
        for (let i = 0; i < value; i++) {
            tempArray.push("unspent");
        }
        for (let i = 0; i < empty; i++) {
            tempArray.push("empty");
        }
        return tempArray;
    };
    const [actions, setActions] = useState(propActions);
    const currentPointsInit = tabulateActions(characterActions, actions);
    const playbookPointsInit = tabulateActions(characterData.playbookActions, actions);
    const availablePointsInit = 7 - characterActions.length;
    const [points, setPoints] = useState({
        current: currentPointsInit,
        playbook: playbookPointsInit,
        pointsPool: availablePointsInit,
        pointsPoolMap: createMappingArray(availablePointsInit),
    });
    const handleToggleFilled = (e, action, sentPoints, index, mappingArray, setMappingArray) => {
        if (sentPoints.current > sentPoints.playbook) {
            let tempPoints = points;
            tempPoints["current"][action] = tempPoints["current"][action] - 1;
            tempPoints.pointsPool = tempPoints.pointsPool - -1;
            tempPoints.pointsPoolMap = createMappingArray(tempPoints.pointsPool);
            setPoints(tempPoints);
            let tempArray = mappingArray;
            tempArray.splice(index, 1, "empty");
            setMappingArray(tempArray);
            setActions([...actions]);
        }
    };
    const handleToggleEmpty = (e, action, sentPoints, mappingArray, setMappingArray) => {
        if (sentPoints.current < 2 && points.pointsPool > 0) {
            let tempPoints = points;
            tempPoints["current"][action] = tempPoints["current"][action] - -1;
            tempPoints.pointsPool = tempPoints.pointsPool - 1;
            tempPoints.pointsPoolMap = createMappingArray(tempPoints.pointsPool);
            setPoints(tempPoints);
            let tempArray = mappingArray;
            tempArray.pop();
            const index = tempArray.indexOf("empty");
            tempArray.splice(index, 0, "spent");
            setMappingArray(tempArray);
            setActions([...actions]);
        }
    };
    if (idCompletion.actions === false) {
        return (
            <div
                className={`"actions-form"${
                    formErrors.actions === true ? " actions-form--error" : ""
                }`}
            >
                <div>
                    <div>
                        <h2>Assign 4 action pips:</h2>
                        <p>
                            Assign one that you feel relates to your heritage, one that you feel
                            relates to your background, and two as you desire. Action pips cannot
                            exceed two per action for new characters.
                        </p>
                        <div>
                            <h3>Pips Remaining:</h3>
                            <div>
                                {points.pointsPoolMap &&
                                    points.pointsPoolMap.map((value, index) => {
                                        if (value === "unspent") {
                                            return (
                                                <img
                                                    src={pipFilled}
                                                    alt="filled pip icon"
                                                    className="pip pip--filled"
                                                    key={`poolpip${index}`}
                                                />
                                            );
                                        } else {
                                            return (
                                                <img
                                                    src={pipEmpty}
                                                    alt="filled pip icon"
                                                    className="pip pip--empty"
                                                    key={`poolpip${index}`}
                                                />
                                            );
                                        }
                                    })}
                            </div>
                        </div>
                    </div>
                    <ul>
                        {actions &&
                            actions.map((action) => {
                                let array = [];
                                for (let i = 0; i < points.playbook[action.action]; i++) {
                                    array.push("playbook");
                                }
                                for (
                                    let i = 0;
                                    i <
                                    points.current[action.action] - points.playbook[action.action];
                                    i++
                                ) {
                                    array.push("spent");
                                }
                                for (let i = array.length; i < 3; i++) {
                                    array.push("empty");
                                }
                                return (
                                    <Action
                                        key={`action ${action.id}`}
                                        action={action}
                                        currentPoints={points.current[action.action]}
                                        playbookPoints={points.playbook[action.action]}
                                        pointsPool={points.pointsPool}
                                        handleToggleEmpty={handleToggleEmpty}
                                        handleToggleFilled={handleToggleFilled}
                                        array={array}
                                    />
                                );
                            })}
                    </ul>
                    <div>
                        <button
                            className="actions__submit"
                            onClick={(e) => {
                                handleSubmitActions(e, points.current, points.pointsPool);
                            }}
                        >
                            Submit Action Selection
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
