import "./PeopleSection.scss";
import PersonCard from "./PersonCard/PersonCard";
import PersonDetails from "./PersonDetails/PersonDetails";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function PeopleSection({
    incompleteSections,
    characterData,
    friends,
    handleSubmitPerson,
    formErrors,
}) {
    const [cookies] = useCookies("characterData");

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
    const isLoaded = !!cookies.characterData?.friend;

    const [selectedPeople, setSelectedPeople] = useState({ friend: false, rival: false });
    const [peopleStories, setPeopleStories] = useState({ friend: "", rival: "" });
    useEffect(() => {
        if (!!isLoaded) {
            const friendPortraitValue = characterData.friend.portraitPath
            .replace("/portraits/portrait", "")
            .replace(".png", "");
        const rivalPortraitValue = characterData.rival.portraitPath
            .replace("/portraits/portrait", "")
            .replace(".png", "");
            const friend = friends.find((person) => {
                return person.name === characterData.friend.name;
            });
            const friendIndex = friends.findIndex((person) => {
                return person.name === characterData.friend.name;
            });
            const rival = friends.find((person) => {
                return person.name === characterData.rival.name;
            });
            const rivalIndex = friends.findIndex((person) => {
                return person.name === characterData.rival.name;
            });
            const tempPortraitVals = portraitValues;
            tempPortraitVals.splice(friendIndex, 1, friendPortraitValue);
            tempPortraitVals.splice(rivalIndex, 1, rivalPortraitValue);
            setPortraitValues(tempPortraitVals);
            setSelectedPeople({
                ...selectedPeople,
                friend: {
                    id: friend.id,
                    name: friend.name,
                    description: friend.description,
                    elaboration: friend.elaboration,
                    portraitPath: characterData.friend.portraitPath,
                },
                rival: {
                    id: rival.id,
                    name: rival.name,
                    description: rival.description,
                    elaboration: rival.elaboration,
                    portraitPath: characterData.rival.portraitPath,
                },
            });
            setPeopleStories({
                friend: characterData.friend_story,
                rival: characterData.rival_story,
            });
        }
         // eslint-disable-next-line
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
                                    characterData.friend?.id === undefined
                                        ? ""
                                        : characterData.friend.id
                                }
                                rival={
                                    characterData.rival?.id === undefined
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
