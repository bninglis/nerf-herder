import "./BlockForm.scss";
import pipFilled from "../../assets/icons/pip-filled.svg";
import pipEmpty from "../../assets/icons/pip-empty.svg";
import { useState } from "react";

export default function BlockForm({
    refData,
    handleNextStage,
    handleItemSelection,
    handleChangePlaybook,
}) {
    console.log(refData);
    const [whichPutAway, setWhichPutAway] = useState(null);
    const {
        character_questions,
        overview,
        playbook,
        starting_ability,
        starting_ability_clarification,
        starting_ability_summary,
        starting_actions,
        tagline,
        xp_advice,
        xp_gain,
    } = refData.playbook[0];
    const { special_abilities, build_suggestions } = refData;
    const sortedBuilds = build_suggestions.map((build) => {
        const sortedActions = [
            build.action_1.toLowerCase(),
            build.action_2.toLowerCase(),
            build.action_3.toLowerCase(),
            build.action_4.toLowerCase(),
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
        <div className={`starter-form${!!whichPutAway ? " starter-form--hidden" : ""}`}>
            <button className="intro__reset" onClick={handleChangePlaybook}>
                <h2 className="intro__playbook">{playbook}</h2>
            </button>
            <div className="intro">
                <h3 className="intro__tagline intro__text">{tagline}</h3>
                <p className="intro__overview intro__text">{overview}</p>
                <p className="intro__questions intro__text">{character_questions}</p>
                <p className="intro__xp intro__text">
                    <span className="bold">{xp_gain}</span>
                    {xp_advice}
                </p>
            </div>
            <div className="starting-features">
                <div className="starting-ability__block">
                    <h2 className="starting-ability__headline">Starting Features</h2>
                </div>
                <div className="starting-ability">
                    <div>
                        <h3 className="starting-ability__subheader">Starting Ability</h3>
                        <h4 className="starting-ability__ability">{starting_ability}</h4>
                        <p className="starting-ability__description">
                            <span className="bold"> {starting_ability_summary} </span>
                            {starting_ability_clarification}
                        </p>
                    </div>
                    <div className="actions__container">
                        <h3 className="actions__subheader">Actions</h3>
                        <div className="actions">
                            <div className="action">
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l-.28,12.75L309.83,101.35H297.07V0ZM309.83,0V101.35L95.89,458.92H511.4l-.69-12.75h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l-.28,12.75L309.83,101.35H297.07V0ZM309.83,0V101.35L95.89,458.92H511.4l-.69-12.75h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l200.9-344.82V0ZM309.83,0V101.35L510.71,446.17h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <h4 className="action__name">{actionWords[0]}</h4>
                            </div>
                            <div className="action">
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l-.28,12.75L309.83,101.35H297.07V0ZM309.83,0V101.35L95.89,458.92H511.4l-.69-12.75h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l200.9-344.82V0ZM309.83,0V101.35L510.71,446.17h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    className="action__pip"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 606.9 509.94"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path
                                                d="M577.18,458.92H29.72L0,509.94H606.9Zm-540-12.75h59l200.9-344.82V0ZM309.83,0V101.35L510.71,446.17h59.05Z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <h4 className="action__name">{actionWords[1]}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="special-abilities">
                <div className="special-abilities__block">
                    <h2 className="special-abilities__headline">Special Ability</h2>
                </div>
                <div className="special-abilities__guidelines">
                    <h3 className="special-abilities__subheader">Choose a Special Ability</h3>
                    <p className="special-abilities__builds">
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
                                        handleItemSelection(
                                            e,
                                            ability.id,
                                            ability.name,
                                            ability.description,
                                            ability.clarification,
                                            starting_ability,
                                            starting_ability_summary,
                                            starting_ability_clarification
                                        );
                                    }}
                                    onAnimationEnd={handleNextStage}
                                >
                                    <li className="special-ability" key={`i${ability.id}`}>
                                        <h4 className="special-ability__name">{ability.name}</h4>
                                        <p className="special-ability__description special-ability__text">
                                            {ability.description}
                                        </p>
                                        <p className="special-ability__clarification special-ability__text">
                                            {" "}
                                            {ability.clarification}
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
                                        handleSelect(e, build.id);
                                        handleItemSelection(
                                            e,
                                            build.special_abilities_id,
                                            build.special_ability,
                                            special_abilities.find((item) => {
                                                return (item.special_abilities_id =
                                                    build.special_abilities_id);
                                            })["special_ability_description"],
                                            special_abilities.find((item) => {
                                                return (item.special_abilities_id =
                                                    build.special_abilities_id);
                                            })["special_ability_clarification"],
                                            starting_ability,
                                            starting_ability_summary,
                                            starting_ability_clarification,
                                            build.actionsArray
                                        );
                                    }}
                                    onAnimationEnd={handleNextStage}
                                    key={`b${build.id}`}
                                    id={build.id}
                                    className={`builds__button${
                                        whichPutAway === build.id ? " builds__button--selected" : ""
                                    }`}
                                >
                                    <li key={`i${build.id}`}>
                                        <h4 className="builds__name">{build.build_name}</h4>
                                        <p className="builds__description">{build.buildString}</p>
                                        <p className="builds__clarification">
                                            {build.special_ability}
                                        </p>
                                    </li>
                                </button>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
