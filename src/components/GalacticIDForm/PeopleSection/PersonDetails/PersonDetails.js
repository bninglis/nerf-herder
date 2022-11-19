import "./PersonDetails.scss";

export default function PersonDetails({
    relationship,
    selectedPeople,
    incompleteSections,
    peopleStories,
    setPeopleStories,
    handleSubmitPerson,
    formErrors,
}) {
    const handlePersonStory = (e) => {
        if (e.target.name === "friendfield") {
            setPeopleStories({ ...peopleStories, friend: e.target.value });
        } else {
            setPeopleStories({ ...peopleStories, rival: e.target.value });
        }
    };
    // const peopleStoriesInit = peopleStories;
    if (
        selectedPeople[relationship] !== false &&
        incompleteSections["people"][relationship] !== false
    ) {
        return (
            <div>
                <div className="details__container">
                    <div className={`people__details people__details--${relationship}`}>
                        <img
                            className={`details__portrait details__portrait--${relationship}`}
                            src={selectedPeople[relationship]["portraitPath"]}
                            alt={`portrait of ${selectedPeople[relationship]["name"]}`}
                        />
                        <div className="details__info">
                            <h4 className={`details__name details__name--${relationship}`}>
                                {selectedPeople[relationship]["name"]}
                            </h4>
                            <h5 className={`details__job details__job--${relationship}`}>
                                {selectedPeople[relationship]["description"]}
                            </h5>
                            <p
                                className={`details__elaboration details__elaboration--${relationship}`}
                            >
                                {selectedPeople[relationship]["elaboration"]}
                            </p>
                            <form
                                className={`people__form people__form--${relationship}`}
                                onSubmit={(e) => {
                                    handleSubmitPerson(
                                        e,
                                        relationship,
                                        selectedPeople[relationship]["id"],
                                        selectedPeople[relationship]["name"],
                                        peopleStories[relationship],
                                        selectedPeople[relationship]["portraitPath"]
                                    );
                                }}
                            >
                                <label className="people__label" htmlFor={`${relationship}field`}>
                                    Write briefly about your{" "}
                                    {relationship === "friend" ? " friendship " : " rivalry "}with{" "}
                                    {selectedPeople[relationship]["name"]}:
                                </label>
                                <textarea
                                    className={`people__field${
                                        formErrors[relationship] === true
                                            ? " people__field--error"
                                            : ""
                                    }`}
                                    name={`${relationship}field`}
                                    onChange={handlePersonStory}
                                    placeholder="Please enter here..."
                                    value={peopleStories[relationship]}
                                ></textarea>
                                <button
                                    className={`people__submit people__submit--${relationship}`}
                                >
                                    Submit {selectedPeople[relationship]["name"]} as {relationship}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
