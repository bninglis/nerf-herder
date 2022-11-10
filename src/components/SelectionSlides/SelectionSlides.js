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
import ArrowButton from "./ArrowButton/ArrowButton";

// the hologram slides are created by having four class suffixes, one for the focused element, the ones
// before and after, and all others.The before and after classes are set to the appropriate side for the
// transition to trigger, and the others are set to display: none;

export default function SelectionSlides({
    handleSelectPlaybook,
    handleNextStage,
    apiUrl,
    setProjectorPosition,
}) {
    const [currentPlaybook, setCurrentPlaybook] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [playbooks, setPlaybooks] = useState();
    const [isHovered, setIsHovered] = useState({ back: false, next: false });

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
        setProjectorPosition(true);
    };

    const handleHover = (e, state) => {
        setIsHovered({ ...isHovered, [state.direction]: state[state.direction] });
    };

    return (
        <>
            <div className="slides">
                <button
                    className="slides__button slides__button--back"
                    onClick={handleBack}
                    onMouseEnter={(e) => {
                        handleHover(e, { direction: "back", back: true });
                    }}
                    onMouseLeave={(e) => {
                        handleHover(e, { direction: "back", back: false });
                    }}
                >
                    <ArrowButton direction="back" isHovered={isHovered} isSelected={isSelected} />
                </button>
                {playbooks &&
                    playbooks.map((book, i) => {
                        return (
                            <div
                                className={`playbook-overview playbook-overview--${i}${
                                    currentPlaybook === i ? " playbook-overview--focus" : ""
                                }${currentPlaybook === i - -1 ? " playbook-overview--passed" : ""}${
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
                                        !!isSelected ? " playbook-overview__action--selected" : ""
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
                                >
                                    <h2 className="playbook-overview__playbook">{book.playbook}</h2>
                                    <h3 className="playbook-overview__tagline">{book.tagline}</h3>
                                    <p className="playbook-overview__summary">{book.summary}</p>
                                </div>
                            </div>
                        );
                    })}

                <button
                    className="slides__button slides__button--next"
                    onClick={handleNext}
                    onMouseEnter={(e) => {
                        handleHover(e, { direction: "next", next: true });
                    }}
                    onMouseLeave={(e) => {
                        handleHover(e, { direction: "next", next: false });
                    }}
                >
                    <ArrowButton
                        className="next-button"
                        direction="next"
                        isHovered={isHovered}
                        isSelected={isSelected}
                    />
                </button>
            </div>
        </>
    );
}
