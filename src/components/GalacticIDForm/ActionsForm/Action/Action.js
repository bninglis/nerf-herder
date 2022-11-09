import "./Action.scss";
import { useState, useEffect } from "react";

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
    }, [pointsPool, currentPoints, playbookPoints]);

    return (
        <li className="actions-form__action">
            <h4 className="action__name">{action.action}</h4>
            <div className="action__points">
                {mappingArray &&
                    mappingArray.map((pip, index) => {
                        if (pip === "playbook" || pip === "spent") {
                            return (
                                <button
                                    className="pip__button pip__button--empty"
                                    key={`${action}${index}`}
                                    onClick={(e) => {
                                        handleToggleFilled(
                                            e,
                                            action.action,
                                            {
                                                playbook: playbookPoints,
                                                spent: currentPoints - playbookPoints,
                                                current: currentPoints,
                                            },
                                            index,
                                            mappingArray,
                                            setMappingArray
                                        );
                                    }}
                                >
                                    <svg
                                        className={`pip ${
                                            pip === "playbook" ? "pip--playbook" : "pip--spent"
                                        }`}
                                        key={`poolpip${index}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 606.9 509.94"
                                    >
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <path d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l-.28,12.75L309.83,101.35H297.07V0ZM309.83,0V101.35L95.89,458.92H511.4l-.69-12.75h59.05Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            );
                        } else {
                            return (
                                <button
                                    className="pip__button pip__button--empty"
                                    key={`${action}${index}`}
                                    onClick={(e) => {
                                        handleToggleEmpty(
                                            e,
                                            action.action,
                                            {
                                                playbook: playbookPoints,
                                                spent: currentPoints - playbookPoints,
                                                current: currentPoints,
                                            },
                                            mappingArray,
                                            setMappingArray
                                        );
                                    }}
                                >
                                    <svg
                                        className="pip pip--empty"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 606.9 509.94"
                                    >
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <path d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l200.9-344.82V0ZM309.83,0V101.35L510.71,446.17h59.05Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            );
                        }
                    })}
            </div>
            <div className="action__text">
                <h5 className="action__description">{action.description}</h5>
                <p className="action__clarification">{action.clarification}</p>
            </div>
        </li>
    );
}
