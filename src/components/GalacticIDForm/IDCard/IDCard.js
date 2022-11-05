import "./IDCard.scss";
import { useState } from "react";

export default function IDCard({ characterData }) {
    const { playbook, abilityName, heritage, background, vice, friend, enemy, actionsStrings } =
        characterData;
    return (
        <>
            <div>
                <button>
                    <h2>{playbook}</h2>
                </button>
                <button>
                    <div>
                        <h3>{abilityName}</h3>
                    </div>
                </button>
            </div>
            <div className="id-card">
                <div className="id-card__basic-info">
                    <svg></svg>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Alias</p>
                </div>
                <div className="id-card__main">
                    <h2>Galactic ID</h2>
                    <div className="id-card__history">
                        <p className="id-card__text">{playbook.playbook}</p>
                        <div className="id-card__heritage">
                            <p className="id-card__text">Heritage:</p>
                            <p className="id-card__text">
                                {!heritage ? "" : `${heritage}`}
                            </p>
                        </div>
                        <div className="id-card__background">
                            <p className="id-card__text">Background:</p>
                            <p className="id-card__text">
                                {!background ? "" : `${background}`}
                            </p>
                        </div>
                        <div className="id-card__vice">
                            <p className="id-card__text">Vice:</p>
                            <p className="id-card__text">
                                {!vice ? "" : `${vice}`}
                            </p>
                        </div>
                    </div>
                    <div className="id-card__current">
                        <div className="id-card__friend">
                            <p className="id-card__text">Associate:</p>
                            <p className="id-card__text">
                                {!friend ? "" : `${friend}`}
                            </p>
                        </div>
                        <div className="id-card__rival">
                            <p className="id-card__text">Enemy:</p>
                            <p className="id-card__text">
                                {!enemy ? "" : `${enemy}`}
                            </p>
                        </div>
                        <div className="id-card__action-values">
                            {actionsStrings[1] &&
                                actionsStrings[1].map((action) => {
                                    return <p key={action}>{action}</p>;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
