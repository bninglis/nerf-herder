import "./PeopleSection.scss";
import PersonCard from "./PersonCard/PersonCard";
import PersonDetails from "./PersonDetails/PersonDetails";
import { useState } from "react";

export default function PeopleSection({
    incompleteSections,
    characterData,
    friends,
    handleSubmitPerson,
    formErrors,
}) {
    const [selectedPeople, setSelectedPeople] = useState({ friend: false, rival: false });
    const [peopleStories, setPeopleStories] = useState({ friend: "", rival: "" });
    const handleSelectFriend = (e, id, name, description, elaboration) => {
        if (id === selectedPeople.rival.id) {
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
    if (incompleteSections.people.friend === false && incompleteSections.people.rival === false) {
        return;
    } else {
        return (
            <div className="people">
                <div>
                    <h4>As a {characterData.playbook} you've made some</h4>
                    <h3>{friends[0].type.toLowerCase()}</h3>
                    <h4>Choose one to be your ally and one to be your rival:</h4>
                    <PersonDetails
                        relationship={"friend"}
                        selectedPeople={selectedPeople}
                        incompleteSections={incompleteSections}
                        peopleStories={peopleStories}
                        setPeopleStories={setPeopleStories}
                        handleSubmitPerson={handleSubmitPerson}
                        formErrors={formErrors}
                    />
                    <ul className="people__list">
                        {friends.map((friend) => {
                            return (
                                <PersonCard
                                    id={friend.id}
                                    person={friend}
                                    key={friend.id}
                                    incompleteSections={incompleteSections}
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
                    <PersonDetails
                        relationship={"rival"}
                        selectedPeople={selectedPeople}
                        incompleteSections={incompleteSections}
                        peopleStories={peopleStories}
                        setPeopleStories={setPeopleStories}
                        handleSubmitPerson={handleSubmitPerson}
                        formErrors={formErrors}
                    />
                </div>
            </div>
        );
    }
}
