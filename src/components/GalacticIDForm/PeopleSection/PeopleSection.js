import "./PeopleSection.scss";
import PersonCard from "./PersonCard/PersonCard";
import PersonDetails from "./PersonDetails/PersonDetails";
import { useEffect, useState } from "react";

export default function PeopleSection({
    incompleteSections,
    characterData,
    friends,
    handleSubmitPerson,
    formErrors,
}) {
    const randomPortrait = () => {
        return String(Math.floor(Math.random() * 99) + 3).padStart(2, "0");
    };
    const [portraitValues, setPortraitValues] = useState([
        randomPortrait(),
        randomPortrait(),
        randomPortrait(),
        randomPortrait(),
        randomPortrait(),
    ]);
    const isLoaded = localStorage.getItem("loadCharacter");
    const [selectedPeople, setSelectedPeople] = useState({ friend: false, rival: false });
    const [peopleStories, setPeopleStories] = useState({ friend: "", rival: "" });
    useEffect(() => {
        if (!!isLoaded) {
            let tempPeople = null;
            const friend = friends.find((person) => {
                return person.name === localStorage.getItem("close_friend");
            });
            const rival = friends.find((person) => {
                return person.name === localStorage.getItem("rival");
            });
            setSelectedPeople({
                ...selectedPeople,
                friend: {
                    id: friend.id,
                    name: friend.name,
                    description: friend.description,
                    elaboration: friend.elaboration,
                },
                rival: {
                    id: rival.id,
                    name: rival.name,
                    description: rival.description,
                    elaboration: rival.elaboration,
                },
            });
            setPeopleStories({
                friend: localStorage.getItem("close_friend_story"),
                rival: localStorage.getItem("rival_story"),
            });
        }
    }, []);
    const handleSelectFriend = (e, id, name, description, elaboration, portraitPath) => {
        if (id === selectedPeople.rival.id) {
            setSelectedPeople({
                ...selectedPeople,
                rival: false,
                friend: {
                    id: id,
                    name: name,
                    description: description,
                    elaboration: elaboration,
                    portraitPath: portraitPath,
                },
            });
        } else {
            setSelectedPeople({
                ...selectedPeople,
                friend: {
                    id: id,
                    name: name,
                    description: description,
                    elaboration: elaboration,
                    portraitPath: portraitPath,
                },
            });
        }
    };
    const handleSelectRival = (e, id, name, description, elaboration, portraitPath) => {
        if (id === selectedPeople.friend.id) {
            setSelectedPeople({
                ...selectedPeople,
                friend: false,
                rival: {
                    id: id,
                    name: name,
                    description: description,
                    elaboration: elaboration,
                    portraitPath: portraitPath,
                },
            });
        } else {
            setSelectedPeople({
                ...selectedPeople,
                rival: {
                    id: id,
                    name: name,
                    description: description,
                    elaboration: elaboration,
                    portraitPath: portraitPath,
                },
            });
        }
    };
    if (incompleteSections.people.friend === false && incompleteSections.people.rival === false) {
        return;
    } else {
        return (
            <div className="people">
                <div className="people__intro">
                    <h4 className="people__preamble">
                        As a {characterData.playbook} you've made some
                    </h4>
                    <h3 className="people__headline">{friends[0].type.toLowerCase()}</h3>
                    <p className="people__elaboration">
                        Choose one to be your ally and one to be your rival:
                    </p>
                </div>
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
                    {friends.map((friend, index) => {
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
                                portraitValue={portraitValues[index]}
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
        );
    }
}
