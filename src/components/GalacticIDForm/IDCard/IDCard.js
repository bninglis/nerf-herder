import "./IDCard.scss";
import { useState } from "react";

export default function IDCard({
    characterData,
    handleEdit,
    incompleteSections,
    handleChangeAbility,
    handleChangePlaybook,
}) {
    const { playbook, abilityName, heritage, background, vice, friend, rival, actionsStrings } =
        characterData;
    return (
        <>
            <div>
                <button onClick={handleChangePlaybook}>
                    <h2>{playbook}</h2>
                </button>
                <button onClick={handleChangeAbility}>
                    <div>
                        <h3>{abilityName}</h3>
                    </div>
                </button>
            </div>
            <div className="id-card">
                <div className="id-card__basic-info">
                    <p>
                        First Name:{" "}
                        {!characterData.firstName ? "First Name" : characterData.firstName}
                    </p>
                    <p>
                        Last Name: {!characterData.lastName ? "Last Name" : characterData.lastName}
                    </p>
                    <p>Alias: {!characterData.alias ? "Alias" : characterData.alias}</p>
                    <p>Description: {!characterData.look ? "Appearance" : characterData.look}</p>
                    <button
                        className={`id-card__edit${
                            incompleteSections.name === true ? " id-card__edit--hidden" : ""
                        }`}
                        onClick={(e) => {
                            handleEdit(e, "name");
                        }}
                    >
                        Edit
                    </button>
                </div>
                <div className="id-card__main">
                    <h2>Galactic ID</h2>
                    <div className="id-card__history">
                        <p className="id-card__text">{playbook.playbook}</p>
                        <div className="id-card__heritage">
                            <p className="id-card__text">Heritage:</p>
                            <p className="id-card__text">{!heritage ? "Blank" : `${heritage}`}</p>
                            <button
                                className={`id-card__edit${
                                    incompleteSections.history.heritages === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "history", "heritages");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                        <div className="id-card__background">
                            <p className="id-card__text">Background:</p>
                            <p className="id-card__text">
                                {!background ? "Blank" : `${background}`}
                            </p>
                            <button
                                className={`id-card__edit${
                                    incompleteSections.history.backgrounds === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "history", "backgrounds");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                        <div className="id-card__vice">
                            <p className="id-card__text">Vice:</p>
                            <p className="id-card__text">{!vice ? "Blank" : `${vice}`}</p>
                            <button
                                className={`id-card__edit${
                                    incompleteSections.history.vices === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "history", "vices");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className="id-card__current">
                        <div className="id-card__friend">
                            <p className="id-card__text">Associate:</p>
                            <p className="id-card__text">{!friend ? "" : `${friend.name}`}</p>
                            <button
                                className={`id-card__edit${
                                    incompleteSections.people.friend === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "people", "friend");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                        <div className="id-card__rival">
                            <p className="id-card__text">Enemy:</p>
                            <p className="id-card__text">{!rival ? "" : `${rival.name}`}</p>
                            <button
                                className={`id-card__edit${
                                    incompleteSections.people.rival === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "people", "rival");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                        <div className="id-card__action-values">
                            {actionsStrings[1] &&
                                actionsStrings[1].map((action) => {
                                    return <p key={action}>{action}</p>;
                                })}
                            <button
                                className={`id-card__edit${
                                    incompleteSections.actions === true
                                        ? " id-card__edit--hidden"
                                        : ""
                                }`}
                                onClick={(e) => {
                                    handleEdit(e, "actions");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
