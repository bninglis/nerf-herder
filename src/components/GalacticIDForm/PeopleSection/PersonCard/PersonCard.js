import "./PersonCard.scss";

export default function PersonCard({
    person,
    incompleteSections,
    handleSelectFriend,
    handleSelectRival,
    selectedPeople,
    friend,
    rival,
    portraitValue,
}) {
    return (
        <li
            className={`person${
                selectedPeople.friend.id === person.id ||
                friend === person.id ||
                selectedPeople.rival.id === person.id ||
                rival === person.id
                    ? " person--hidden"
                    : ""
            }`}
        >
            <button
                className={`person__button person__button--friend${
                    !!incompleteSections.people.friend ? "" : " person__button--hidden"
                }`}
                onClick={(e) => {
                    handleSelectFriend(
                        e,
                        person.id,
                        person.name,
                        person.description,
                        person.elaboration,
                        `/portraits/portrait${portraitValue}.png`
                    );
                }}
            >
                Friend
            </button>
            <img
                className="person__portrait"
                src={`/portraits/portrait${portraitValue}.png`}
                alt={`portrait of ${person.name}`}
            />
            <h4 className="person__name">{person.name}</h4>
            <p className="person__job">{person.description}</p>
            <p className="person__elaboration">{person.elaboration}</p>
            <button
                className={`person__button person__button--rival${
                    !!incompleteSections.people.rival ? "" : " person__button--rival"
                }`}
                onClick={(e) => {
                    handleSelectRival(
                        e,
                        person.id,
                        person.name,
                        person.description,
                        person.elaboration,
                        `/portraits/portrait${portraitValue}.png`
                    );
                }}
            >
                Rival
            </button>
        </li>
    );
}
