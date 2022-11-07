import "./PersonCard.scss";

export default function PersonCard({
    person,
    incompleteSections,
    handleSelectFriend,
    handleSelectRival,
    selectedPeople,
    friend,
    rival,
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
                        person.elaboration
                    );
                }}
            >
                Friend
            </button>
            <h4>{person.name}</h4>
            <p>{person.description}</p>
            <p>{person.elaboration}</p>
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
                        person.elaboration
                    );
                }}
            >
                Rival
            </button>
        </li>
    );
}
