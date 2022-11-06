import "./ActionsForm.scss";
import Action from "./Action/Action";
import { useState } from "react";

export default function ActionsForm({ actions: propActions, characterData }) {
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
    const [actions, setActions] = useState(propActions);
    const currentPointsInit = tabulateActions(characterActions, actions);
    const playbookPointsInit = tabulateActions(characterData.playbookActions, actions);
    const availablePointsInit = characterActions.length - 7;
    const [points, setPoints] = useState({
        current: currentPointsInit,
        playbook: playbookPointsInit,
        pointsPool: availablePointsInit,
    });
    const handleToggleFilled = (e, action, sentPoints, index, mappingArray, setMappingArray) => {
        if (sentPoints.current > sentPoints.playbook) {
            let tempPoints = points;
            tempPoints["current"][action] = tempPoints["current"][action] - 1;
            tempPoints.pointsPool = tempPoints.pointsPool - -1;
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
            setPoints(tempPoints);
            let tempArray = mappingArray;
            tempArray.pop();
            const index = tempArray.indexOf("empty");
            tempArray.splice(index, 0, "spent");
            setMappingArray(tempArray);
            setActions([...actions]);
        }
    };
    return (
        <div>
            <ul>
                {actions &&
                    actions.map((action) => {
                        let array = [];
                        for (let i = 0; i < points.playbook[action.action]; i++) {
                            array.push("playbook");
                        }
                        for (
                            let i = 0;
                            i < points.current[action.action] - points.playbook[action.action];
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
        </div>
    );
}
