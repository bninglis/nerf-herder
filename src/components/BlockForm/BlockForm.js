import "./BlockForm.scss";
import pipFilled from "../../assets/icons/pip-filled.svg";
import pipEmpty from "../../assets/icons/pip-empty.svg";
import { useState } from "react";

export default function BlockForm({ refData, handleBlockFinish }) {
    const [whichPutAway, setWhichPutAway] = useState(null);
    const {
        build_suggestions,
        character_questions,
        id,
        items_description,
        overview,
        playbook,
        playing_advice,
        starting_ability,
        starting_ability_clarification,
        starting_ability_summary,
        starting_actions,
        summary,
        tagline,
        xeno_advice,
        xp_advice,
        xp_gain,
    } = refData.playbook[0];
    const { special_abilities } = refData;
    console.log(refData.playbook);
    const buildArray = [
        ["Ship mechanic", ["Hack +2", "Scramble +1", "Sway +1"], "Fixed"],
        ["Computer whiz", ["Hack +2", "Skulk +1", "Sway +1"], "Hacker"],
        ["Bot builder", ["Hack +1", "Scramble +1", "Attune +2"], "Construct Whisperer"],
        ["Ship owner", ["Helm +2", "Scrap +1", "Command +1"], "Junkyard Hunter"],
    ];
    const handleAbilitySelect = (e) => {
        setWhichPutAway(e.currentTarget.id);
    };
    const handleBuildSelect = () => {};

    const actionsArray = starting_actions.split(",");
    const actions1 = actionsArray[0].split(" ");
    const actions2 = actionsArray[1].split(" ");
    const actionWords = [actions1[0], actions2[1]];

    console.log(build_suggestions);
    while (!starting_actions) {
        return <p>Please wait</p>;
    }
    return (
        <div
            className={`starter-form${!!whichPutAway ? " starter-form--hidden" : ""}`}
            onTransitionEnd={handleBlockFinish}
        >
            <div className="intro">
                <h2>{playbook}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
                <p>
                    <span>{xp_gain}</span>
                    {xp_advice}
                </p>
            </div>
            <div className="starting-features">
                <h2>Starting Features</h2>
                <div className="starting-ability">
                    <h3>Starting Ability</h3>
                    <div>
                        <h4>{starting_ability}</h4>
                        <p>
                            {starting_ability_summary}
                            <span> {starting_ability_clarification}</span>
                        </p>
                    </div>
                    <div className="actions">
                        <h3>Actions</h3>
                        <div className="action">
                            <img className="action__pip" src={pipFilled} alt="" />
                            <img className="action__pip" src={pipFilled} alt="" />
                            <img className="action__pip" src={pipEmpty} alt="" />
                            <h4>{actionWords[0]}</h4>
                        </div>
                        <div className="action">
                            <img className="action__pip" src={pipFilled} alt="" />
                            <img className="action__pip" src={pipEmpty} alt="" />
                            <img className="action__pip" src={pipEmpty} alt="" />
                            <h4>{actionWords[1]}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="special-abilities">
                <h2>Special Ability</h2>
                <div className="starting-ability">
                    <h3>Choose a Special Ability</h3>
                    <p>
                        or if you want some guidance when you assign your four starting action dots
                        and special ability, use one of the templates at the bottom
                    </p>
                </div>
                <ul className="ability-list">
                    {special_abilities &&
                        special_abilities.map((ability) => {
                            return (
                                <button
                                    className={`special-ability__button${
                                        whichPutAway === ability.id
                                            ? " special-ability__button--selected"
                                            : ""
                                    }`}
                                    id={ability.id}
                                    key={`b${ability.id}`}
                                    onClick={handleAbilitySelect}
                                >
                                    <li className="special-ability" key={`i${ability.id}`}>
                                        <h4>{ability.name}</h4>
                                        <p className="special-ability__description">
                                            {ability.description}
                                            <span> {ability.clarification}</span>
                                        </p>
                                    </li>
                                </button>
                            );
                        })}
                </ul>
                <ul className="build-list">
                    {buildArray &&
                        buildArray.map((build) => {
                            return (
                                <button onClick={handleBuildSelect} key={`b${build[0]}`}>
                                    <li key={`i${build[0]}`}>
                                        <h4>{build[0]}</h4>
                                        <p>{`${build[1][0]} ${build[1][1]} ${build[1][2]}`}</p>
                                        <p>{build[2]}</p>
                                    </li>
                                </button>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
