import "./SelectionSlides.scss";
import scoundrelImage from "../../assets/images/scoundrel.png";
import mechanicImage from "../../assets/images/mechanic.png";
import speakerImage from "../../assets/images/speaker.png";
import muscleImage from "../../assets/images/muscle.png";
import stitchImage from "../../assets/images/stitch.png";
import pilotImage from "../../assets/images/pilot.png";
import mysticImage from "../../assets/images/mystic.png";
import { useState } from "react";
import axios from "axios";

export default function SelectionSlides({ handleSelectPlaybook, handleNextStage }) {
    const [currentPlaybook, setCurrentPlaybook] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    // console.log(apiUrl);
    const tempPlaybookList = [
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
    const tempPlaybook = {
        id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
        playbook: "mechanic",
        summary:
            "Play a Mechanic if you want to make new devices, keep your ship in good shape, or hack systems.",
        tagline: "A gearhead and hacker",
        overview:
            "Whether it’s fixing up the ship’s engines or constructing a specialized safecracker to break into a Hegemonic vault, a mechanic is an invaluable asset on most jobs. You might be the mousy one who has all the fancy toys, or more hands-on, lugging your gear to The Job. Or you might prefer to literally make friends and specialize in Urbotic creation. When something breaks, you’re the one to call.",
        xp_gain:
            "When you play a Mechanic, you earn xp when you address challenges with technical skill or ingenuity. ",
        xp_advice:
            "Always look at the devices around you and be prepared to make them do what you want them to.",
        character_questions:
            "Did you make your own drone? How’d you learn your technical skills? Where’d you find your pet and what is it? Are you unassuming, fading into a crowd, or hard to miss, covered in tattoos?",
        starting_actions: "Rig 2, Study 1",
        build_suggestions:
            "Ship mechanic. Hack +2, Scramble +1, Sway +1. Fixed.\nComputer whiz. Hack +2, Skulk +1, Sway +1. Hacker.\nBot builder. Hack +1, Scramble +1, Attune +2. Construct Whisperer.\nShip owner. Helm +2, Scrap +1, Command +1. Junkyard Hunter.",
        starting_ability: "tinker",
        starting_ability_summary:
            "When you work on a clock with rig or hack, or when you study a schematic, fill +1 segment.",
        starting_ability_clarification:
            "Mechanics have tools, ship parts, and their latest inventions around or on them. Although they can dress like anyone else, many mechanics prefer looks that are tough to tear, have plenty of places to stash a tool or two, and are easy to crawl through a ship duct in.",
        items_description:
            "You get this bonus segment regardless of whether this is a Downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
        playing_advice:
            "Playing a Mechanic is foremost about your relationship with The Ship. No one else will have the same ability to keep it flying, and when something breaks, all eyes will be on you. Look for opportunities to bring up what you’ve personally modified on The Ship. Where do you get parts when The Ship needs something repaired?\n\nHow did you become a mechanic? Were you mentored by one of your friends? Were you once a Guild trainee? Why did you leave and join the crew? Do you approach fixing The Ship as a stop-gap solution, where you’re simply trying to find a patch until the next thing breaks, or is it a matter of pride that something never fails twice?\n\nFamiliarize yourself with the crafting system. The ability for you to make new devices is very powerful, and the starting Tinker ability gives you an advantage that no one else will be able to match. Ask the rest of the crew what devices you might be able to create and get them to chip in for their development, either in extra downtimes to speed up Design or with extra cred to pay for Assembly.\n\nAction-wise, you may want to pick up skulk if you tend to lurk in the background, or Attune if you expect to be working on Ur machines or Urbots. If you also serve as the crew’s foremost computer and system expert, you’ll want to stack some hack.\n\nVeteran ability-wise, the Speaker’s Old Friends ability can play up your connections among crafters and hackers. If you want to go full mad scientist, look at the Stitch’s Dr. Strange ability.",
        xeno_advice:
            "Every species has Mechanics, so when playing a xeno, consider how that xenotype relates to machines. Some xenos have an unusual relationship with technology (particularly Ur-based technology), such as the Sah’iir, while others use unusual materials, like the Mem.\n\nDoes your species have an unusual adaptation for working on machines? Are they small and fit into ventilation ducts easily? Also consider how your xeno adaptations might reflect sides of you that aren’t directly relating to machines.\n\nHow does your xeno heritage fit into the story? Have the Guilds excluded your character from certain opportunities because you aren’t human? Or have your people been embraced, perhaps because of an adaptation that The Hegemony could utilize?",
    };
    const imageArray = [
        mechanicImage,
        muscleImage,
        mysticImage,
        pilotImage,
        scoundrelImage,
        speakerImage,
        stitchImage,
    ];

    const handleNext = () => {
        if (currentPlaybook < tempPlaybookList.length - 1) {
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

    console.log(tempPlaybookList[currentPlaybook].id);
    return (
        <>
            <div className="slides">
                <button onClick={handleBack}>Back</button>
                {tempPlaybookList &&
                    tempPlaybookList.map((book, i) => {
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
                                                tempPlaybookList[currentPlaybook].id
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
