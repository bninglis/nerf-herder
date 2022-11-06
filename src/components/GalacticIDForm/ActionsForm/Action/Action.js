import "./Action.scss";
import { useState, useEffect } from "react";
import pipEmpty from "../../../../assets/icons/pip-empty.svg";
import pipFilled from "../../../../assets/icons/pip-filled.svg";

export default function Action({
    action,
    currentPoints,
    playbookPoints,
    pointsPool,
    handleToggleEmpty,
    handleToggleFilled,
}) {
    const [mappingArray, setMappingArray] = useState([]);
    useEffect(() => {
        let array = [];
        for (let i = 0; i < playbookPoints; i++) {
            array.push("playbook");
        }
        for (let i = 0; i < currentPoints - playbookPoints; i++) {
            array.push("spent");
        }
        for (let i = array.length; i < 3; i++) {
            array.push("empty");
        }
        setMappingArray(array);
    },[pointsPool,currentPoints,playbookPoints]);

    return (
        <li>
            <h4>{action.action}</h4>
            <div>
                <p>
                    Playbook: {playbookPoints} Spent: {currentPoints - playbookPoints} Current:{" "}
                    {currentPoints}
                </p>
                {mappingArray &&
                    mappingArray.map((pip, index) => {
                        if (pip === "playbook" || pip === "spent") {
                            return (
                                <button
                                    key={`${action}${index}`}
                                    onClick={(e) => {
                                        handleToggleFilled(e, action.action, {
                                            playbook: playbookPoints,
                                            spent: currentPoints - playbookPoints,
                                            current: currentPoints,
                                        },index,mappingArray,setMappingArray);
                                    }}
                                >
                                    <img
                                        src={pipFilled}
                                        alt="filled action icon"
                                        className={`pip ${
                                            pip === "playbook" ? "pip--playbook" : "pip--spent"
                                        }`}
                                    />
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    key={`${action}${index}`}
                                    onClick={(e) => {
                                        handleToggleEmpty(e, action.action, {
                                            playbook: playbookPoints,
                                            spent: currentPoints - playbookPoints,
                                            current: currentPoints,
                                        },mappingArray,setMappingArray);
                                    }}
                                >
                                    <img
                                        src={pipEmpty}
                                        alt="empty action icon"
                                        className="pip pip--empty"
                                    />
                                </button>
                            );
                        }
                    })}
            </div>
            <div>
                <h5>{action.description}</h5>
                <p>{action.clarification}</p>
            </div>
        </li>
    );
}
