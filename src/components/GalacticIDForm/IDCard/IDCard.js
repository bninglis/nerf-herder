import "./IDCard.scss";

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
            <div className="starter-form">
                <button className="intro__reset" onClick={handleChangePlaybook}>
                    <h2 className="intro__playbook">{playbook}</h2>
                </button>
                <button className="intro__ability" onClick={handleChangeAbility}>
                    <div>
                        <h3 className="intro__ability--text">{abilityName}</h3>
                    </div>
                </button>
            </div>
            <div className="id-card__container">
                <div className="id-card">
                    <div className="id-card__basic-info">
                        <svg
                            className="id-card__pfp"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="1 0.5 338 338"
                        >
                            <path d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1 1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"></path>
                        </svg>
                        <p className="id-card__text bold">First Name: </p>
                        <p className="id-card__text id-card__text--data">
                            {!characterData.firstName ? "First Name" : characterData.firstName}
                        </p>
                        <p className="id-card__text bold">Last Name:</p>
                        <p className="id-card__text id-card__text--data">
                            {!characterData.lastName ? "Last Name" : characterData.lastName}
                        </p>
                        <p className="id-card__text bold">Alias:</p>
                        <p className="id-card__text id-card__text--data">
                            {!characterData.alias ? "Alias" : characterData.alias}
                        </p>
                        <p className="id-card__text bold">Description:</p>
                        <p className="id-card__text id-card__text--data">
                            {!characterData.look ? "Appearance" : characterData.look}
                        </p>
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
                        <h2 className="id-card__title">Galactic ID</h2>
                        <div className="id-card__history">
                            <p className="id-card__text id-card__playbook">
                                {characterData.playbook}
                            </p>
                            <div className="id-card__heritage">
                                <p className="id-card__text">Heritage:</p>
                                <p className="id-card__text id-card__text--type">
                                    {!heritage ? "Blank" : `${heritage}`}
                                </p>
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
                            <div className="id-card__action-values id-card__text">
                                <p className="id-card__text">Actions:</p>
                                {actionsStrings[1] &&
                                    actionsStrings[1].map((action) => {
                                        return (
                                            <p
                                                className="id-card__text id-card__action"
                                                key={action}
                                            >
                                                {action}
                                            </p>
                                        );
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
            </div>
        </>
    );
}
