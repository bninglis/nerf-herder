import "./BlockForm.scss";
import pipFilled from "../../assets/icons/pip-filled.svg";
import pipEmpty from "../../assets/icons/pip-empty.svg";
import { useState } from "react";

export default function BlockForm({ refData, handleNextStage, handleItemSelection }) {
    const [whichPutAway, setWhichPutAway] = useState(null);
    const {
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
    const { special_abilities, build_suggestions } = refData;
    const sortedBuilds = build_suggestions.map((build) => {
        const sortedActions = [
            build.action_1,
            build.action_2,
            build.action_3,
            build.action_4,
        ].sort();
        const buildArray = [];
        sortedActions.forEach((action, index) => {
            if (index < sortedActions.lastIndexOf(action)) {
                buildArray.unshift(action + " +2");
            } else if (index > sortedActions.indexOf(action)) {
                return;
            } else {
                buildArray.push(action + " +1");
            }
        });
        const buildString = buildArray.join(", ");
        return { ...build, actionsArray: sortedActions, buildString: buildString };
    });
    const handleSelect = (e) => {
        setWhichPutAway(e.currentTarget.id);
    };

    const actionsArray = starting_actions.split(",");
    const actions1 = actionsArray[0].split(" ");
    const actions2 = actionsArray[1].split(" ");
    const actionWords = [actions1[0], actions2[1]];

    while (!starting_actions) {
        return <p>Please wait</p>;
    }
    return (
        <div
            className={`starter-form${!!whichPutAway ? " starter-form--hidden" : ""}`}
            onTransitionEnd={handleNextStage}
        >
            <div className="intro">
                <h2>{playbook}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
                <p>{character_questions}</p>
                <p>
                    <span>{xp_gain}</span>
                    {xp_advice}
                </p>
                <h4>Playing a {playbook}</h4>
                <p>{playing_advice}</p>
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
                                    onClick={(e) => {
                                        handleSelect(e, ability.id);
                                        handleItemSelection(e, ability.id, ability.name);
                                    }}
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
                <ul className="builds">
                    {sortedBuilds &&
                        sortedBuilds.map((build) => {
                            return (
                                <button
                                    onClick={(e) => {
                                        handleSelect(e, build.id)
                                        handleItemSelection(e, build.special_abilities_id, build.special_ability, build.actionsArray);
                                    }}
                                    key={`b${build.id}`}
                                    id={build.id}
                                    className={`builds__button${
                                        whichPutAway === build.id ? " builds__button--selected" : ""
                                    }`}
                                >
                                    <li key={`i${build.id}`}>
                                        <h4>{build.build_name}</h4>
                                        <p>{build.buildString}</p>
                                        <p>{build.special_ability}</p>
                                    </li>
                                </button>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
