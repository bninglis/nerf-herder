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
    const playbookList = [
        {
            playbook: "mechanic",
            id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            tagline: "A gearhead and hacker",
            summary:
                "Play a Mechanic if you want to make new devices, keep your ship in good shape, or hack systems.",
        },
        {
            playbook: "muscle",
            id: "765d36e1-14b8-49d2-ac23-6fe55c78f1d8",
            tagline: "A dangerous and intimidating fighter",
            summary:
                "Muscles are good at winning fights. Play a Muscle if you want to be unstoppable in combat.",
        },
        {
            playbook: "mystic",
            id: "e201591f-d9b4-4c78-b6d8-6c6f19bb009f",
            tagline: "A galactic wanderer in touch with The Way",
            summary:
                "Mystics are good at dealing with The Way. Play one if you want to use Artifacts and weird powers.",
        },
        {
            playbook: "pilot",
            id: "90751430-77e8-4696-bbce-c3a64f31d79a",
            tagline: "A ship-handling wizard and danger addict",
            summary: "Play a Pilot if you want to be a daredevil at the wheel and widely traveled.",
        },
        {
            playbook: "scoundrel",
            id: "3e7519b4-26f7-4f40-81df-19275fe2ca63",
            tagline: "A scrappy and lucky survivor",
            summary:
                "Scoundrels love getting into and out of trouble. Play a Scoundrel if you want to press your luck.",
        },
        {
            playbook: "speaker",
            id: "8db6b05e-da26-4165-bad7-35114929bc6c",
            tagline: "A respectable person on the take",
            summary:
                "Play a Speaker if you want to be the respectable one and use connections to get your way.",
        },
        {
            playbook: "stitch",
            id: "4189a100-951c-4fcf-b441-39cfbed39ae6",
            tagline: "A spacefaring healer or scientist",
            summary:
                "Play a Stitch to deal with Science, patch people up, and be the crew’s moral compass.",
        },
    ];
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
        axios.get(`${apiUrl}/ref`).then((response => {
            setPlaybooks(response.data)
        }))
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
            <div className="slides">
                <button onClick={handleBack}>Back</button>
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
                                                playbooks[currentPlaybook].id
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
                                    <h2 className="playbook-overview__playbook">{book.playbook}</h2>
                                    <h3 className="playbook-overview__tagline">{book.tagline}</h3>
                                    <p className="playbook-overview__summary">{book.summary}</p>
                                </div>
                            </div>
                        );
                    })}

                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
}
