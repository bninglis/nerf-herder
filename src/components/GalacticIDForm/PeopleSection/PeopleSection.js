import "./PeopleSection.scss";
import PersonCard from "./PersonCard/PersonCard";
import { useState } from "react";

export default function PeopleSection({
    incompletePeople,
    characterData,
    friends,
    handleSubmitFriend,
    handleSubmitRival,
}) {
    const [selectedPeople, setSelectedPeople] = useState({ friend: false, rival: false });
    const [peopleStories, setPeopleStories] = useState({ friend: "", rival: "" });
    const handleSelectFriend = (e, id, name, description, elaboration) => {
        if (id === selectedPeople.rival.id) {
            console.log("fires");
            setSelectedPeople({
                ...selectedPeople,
                rival: false,
                friend: { id: id, name: name, description: description, elaboration: elaboration },
            });
        } else {
            setSelectedPeople({
                ...selectedPeople,
                friend: { id: id, name: name, description: description, elaboration: elaboration },
            });
        }
    };
    const handleSelectRival = (e, id, name, description, elaboration) => {
        if (id === selectedPeople.friend.id) {
            setSelectedPeople({
                ...selectedPeople,
                // friend: { id: "", name: "", description: "", elaboration: "" },
                friend: false,
                rival: { id: id, name: name, description: description, elaboration: elaboration },
            });
        } else {
            setSelectedPeople({
                ...selectedPeople,
                rival: { id: id, name: name, description: description, elaboration: elaboration },
            });
        }
    };
    const handlePersonStory = (e) => {
        if (e.target.name === "friendfield") {
            setPeopleStories({ ...peopleStories, friend: e.target.value });
        } else {
            setPeopleStories({ ...peopleStories, rival: e.target.value });
        }
    };
    return (
        <div
            className={`people${
                incompletePeople.friend !== false || incompletePeople.rival !== false
                    ? ""
                    : " people--hidden"
            }`}
        >
            <div>
                <h4>As a {characterData.playbook} you've made some</h4>
                <h3>{friends[0].type}</h3>
                <h4>Choose one to be your ally and one to be your rival:</h4>
                <div
                    className={`people__details people__details--friend${
                        !incompletePeople.friend || !!selectedPeople.friend
                            ? ""
                            : " people__details--hidden"
                    }`}
                >
                    <h4>{selectedPeople.friend.name}</h4>
                    <h5>{selectedPeople.friend.description}</h5>
                    <p>{selectedPeople.friend.elaboration}</p>
                    <form
                        className="people__form people__form--friend"
                        onSubmit={(e) => {
                            handleSubmitFriend(
                                e,
                                selectedPeople.friend.id,
                                selectedPeople.friend.name
                            );
                        }}
                    >
                        <label className="people__label" htmlFor="friendfield">
                            Write briefly about your friendship with {selectedPeople.friend.name}:
                        </label>
                        <textarea
                            className="people__field"
                            name="friendfield"
                            onChange={handlePersonStory}
                        ></textarea>
                        <button className="people__submit people__submit--friend">
                            Submit {selectedPeople.friend.name} as Friend
                        </button>
                    </form>
                </div>
                <ul className="people__list">
                    {friends.map((friend) => {
                        return (
                            <PersonCard
                                id={friend.id}
                                person={friend}
                                key={friend.id}
                                incompletePeople={incompletePeople}
                                selectedPeople={selectedPeople}
                                friend={
                                    characterData.friend.id === undefined
                                        ? ""
                                        : characterData.friend.id
                                }
                                rival={
                                    characterData.rival.id === undefined
                                        ? ""
                                        : characterData.rival.id
                                }
                                handleSelectFriend={handleSelectFriend}
                                handleSelectRival={handleSelectRival}
                            />
                        );
                    })}
                </ul>
                <div
                    className={`people__details people__details--rival${
                        !incompletePeople.rival || !!selectedPeople.rival
                            ? ""
                            : " people__details--hidden"
                    }`}
                >
                    <h4>{selectedPeople.rival.name}</h4>
                    <h5>{selectedPeople.rival.description}</h5>
                    <p>{selectedPeople.rival.elaboration}</p>
                    <form
                        className="people__form people__form--rival"
                        onSubmit={(e) => {
                            handleSubmitRival(
                                e,
                                selectedPeople.rival.id,
                                selectedPeople.rival.name
                            );
                        }}
                    >
                        <label className="people__label" htmlFor="rivalfield">
                            Write briefly about how things went South with{" "}
                            {selectedPeople.rival.name}:
                        </label>
                        <textarea
                            className="people__field"
                            name="rivalfield"
                            onChange={handlePersonStory}
                        ></textarea>
                        <button className="people__submit people__submit--friend">
                            Submit {selectedPeople.rival.name} as Rival
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
