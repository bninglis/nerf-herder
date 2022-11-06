import "./CharacterSheet.scss";
import pipFilled from "../../assets/icons/pip-filled.svg";
import pipEmpty from "../../assets/icons/pip-empty.svg";

export default function CharacterSheet({ characterData, refData }) {
    const {
        firstName,
        lastName,
        alias,
        look,
        heritage,
        heritage_story,
        background,
        background_story,
        vice,
        vice_story,
        friend,
        rival,
        abilityName,
        actionsObject,
    } = characterData;
    const { playbook: playbookArray } = refData;
    const actionsArray = Object.entries(actionsObject);
    const actionNames = Object.keys(actionsObject);
    const makeMappingArray = (array) => {
        let tempArray = array;
        let tempObject = {};
        array.forEach((item) => {
            for (let i = 0; i < item[1]; i++) {
                item.push("filled");
            }
            for (let i = item.length; i < 5; i++) {
                item.push("empty");
            }
            item.splice(1, 1);
            let key = item.shift();
            tempObject[key] = item;
        });
        return tempObject;
    };
    const mappingArray = makeMappingArray(actionsArray);
    console.log(actionNames);
    const playbook = playbookArray[0];
    return (
        <div>
            <div>
                <h2>Galactic ID</h2>
            </div>
            <div>
                <svg
                    className="profile__placeholder"
                    xmlns="http://www.w3.org/2000/svg"
                    width="340"
                    height="340"
                >
                    <path d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0" />
                </svg>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{alias}</p>
                <p>{look}</p>
            </div>
            <div>
                <h3>Heritage</h3>
                <h4>{heritage}</h4>
                <p>{heritage_story}</p>
            </div>
            <div>
                <h3>Background</h3>
                <h4>{background}</h4>
                <p>{background_story}</p>
            </div>
            <div>
                <h3>Vice</h3>
                <h4>{vice}</h4>
                <p>{vice_story}</p>
            </div>
            <div>
                <div>
                    <h3>Associate</h3>
                    <p>{friend.name}</p>
                    <p>{friend.story}</p>
                </div>
                <div>
                    <h3>Rival</h3>
                    <p>{rival.name}</p>
                    <p>{rival.story}</p>
                </div>
            </div>
            <div>
                <h3>Abilities</h3>
                <div>
                    <h4>{playbook.starting_ability}</h4>
                    <p>{playbook.starting_ability_summary}</p>
                    <p>{playbook.starting_ability_clarification}</p>
                </div>
                <div>
                    <h4>{abilityName}</h4>
                    {/* <p>{abilityDescription}</p>
                    <p>{abilityClarification}</p> */}
                </div>
            </div>
            <div>
                {actionNames &&
                    actionNames.map((name) => {
                        return (
                            <div key={`${name}action`}>
                                <h4>{name}</h4>
                                <div>
                                    {mappingArray[name] &&
                                        mappingArray[name].map((pip, index) => {
                                            return (
                                                <img
                                                    src={pip === "filled" ? pipFilled : pipEmpty}
                                                    alt="filled action icon"
                                                    key={`${name}pip${index}`}
                                                    className="pip"
                                                ></img>
                                            );
                                        })}
                                </div>
                            </div>
                        );
                    })}
                <div></div>
            </div>
        </div>
    );
}
