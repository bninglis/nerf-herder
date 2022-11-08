import "./SelectionSlides.scss";
import scoundrelImage from "../../assets/images/scoundrel.png";
import mechanicImage from "../../assets/images/mechanic.png";
import speakerImage from "../../assets/images/speaker.png";
import muscleImage from "../../assets/images/muscle.png";
import stitchImage from "../../assets/images/stitch.png";
import pilotImage from "../../assets/images/pilot.png";
import mysticImage from "../../assets/images/mystic.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SelectionSlides({ handleSelectPlaybook, handleNextStage, apiUrl }) {
    const [currentPlaybook, setCurrentPlaybook] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [playbooks, setPlaybooks] = useState();
    const [ellipsePosition, setEllipsePosition] = useState(false);

    const imageArray = [
        mechanicImage,
        muscleImage,
        mysticImage,
        pilotImage,
        scoundrelImage,
        speakerImage,
        stitchImage,
    ];

    useEffect(() => {
        axios.get(`${apiUrl}/ref`).then((response) => {
            setPlaybooks(response.data);
        });
    }, []);

    const handleNext = () => {
        if (currentPlaybook < playbooks.length - 1) {
            setCurrentPlaybook(currentPlaybook + 1);
        }
    };

    const handleBack = () => {
        if (currentPlaybook > 0) {
            setCurrentPlaybook(currentPlaybook - 1);
        }
    };

    const handleHideSelector = () => {
        setIsSelected(true);
    };

    return (
        <>
            <div>
                <div className="projector__container">
                    <div className="projector__lights">
                        <div className="projector__beam--container">
                            <div className="projector__beam"></div>
                        </div>
                        <div className="projector__source"></div>
                    </div>
                    <div
                        className={`projector__circles${
                            !!ellipsePosition
                                ? " projector__circles--position2"
                                :""
                        }`}
                    >
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--1--position2" : ""
                            } projector__ellipse--1`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--2--position2" : ""
                            } projector__ellipse--2`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--3--position2" : ""
                            } projector__ellipse--3`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--4--position2" : ""
                            } projector__ellipse--4`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--5--position2" : ""
                            } projector__ellipse--5`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--6--position2" : ""
                            } projector__ellipse--6`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--7--position2" : ""
                            } projector__ellipse--7`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--8--position2" : ""
                            } projector__ellipse--8`}
                        ></div>
                        <div
                            className={`projector__ellipse${
                                !!ellipsePosition ? " projector__ellipse--9--position2" : ""
                            } projector__ellipse--9`}
                        ></div>
                    </div>
                </div>
                <div className="slides">
                    <button onClick={handleBack}>Back</button>
                    {playbooks &&
                        playbooks.map((book, i) => {
                            return (
                                <div
                                    className={`playbook-overview playbook-overview--${i}${
                                        currentPlaybook === i ? " playbook-overview--focus" : ""
                                    }${
                                        currentPlaybook === i - -1
                                            ? " playbook-overview--passed"
                                            : ""
                                    }${
                                        currentPlaybook === i - 1 ? " playbook-overview--next" : ""
                                    }${
                                        currentPlaybook > i - -1 || currentPlaybook < i - 1
                                            ? " playbook-overview--hidden"
                                            : ""
                                    }`}
                                    key={book.id}
                                >
                                    <div
                                        className={`playbook-overview__action${
                                            !!isSelected
                                                ? " playbook-overview__action--selected"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="playbook-overview__selector"
                                            onClick={(e) => {
                                                handleHideSelector();
                                                handleSelectPlaybook(
                                                    e,
                                                    currentPlaybook,
                                                    playbooks[currentPlaybook].id,
                                                    playbooks[currentPlaybook].playbook
                                                );
                                            }}
                                        >
                                            <img
                                                className="playbook-overview__image"
                                                src={imageArray[i]}
                                                alt={`a ${book.playbook}`}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`playbook-overview__text${
                                            !!isSelected ? " playbook-overview__text--selected" : ""
                                        }`}
                                        onTransitionEnd={handleNextStage}
                                    >
                                        <h2 className="playbook-overview__playbook">
                                            {book.playbook}
                                        </h2>
                                        <h3 className="playbook-overview__tagline">
                                            {book.tagline}
                                        </h3>
                                        <p className="playbook-overview__summary">{book.summary}</p>
                                    </div>
                                </div>
                            );
                        })}

                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
}
