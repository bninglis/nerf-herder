import "./GalacticIDForm.scss";
import IDCard from "./IDCard/IDCard";
import HistoryForm from "./HistoryForm/HistoryForm";
import PersonCard from "./PeopleSection/PersonCard/PersonCard";
import PeopleSection from "./PeopleSection/PeopleSection";
import { useState } from "react";
import ActionsForm from "./ActionsForm/ActionsForm";

export default function GalacticIDForm({
    refData,
    characterData,
    handleSectionSubmission,
    incompleteSections,
    incompletePeople,
    handleSubmitFriend,
    handleSubmitRival,
}) {
    const { playbook: playbookArray, heritages, backgrounds, friends, vices, actions} = refData;
    const historyData = { heritages: heritages, backgrounds: backgrounds, vices: vices };
    const playbook = playbookArray[0];
    
    return (
        <>
            <IDCard characterData={characterData} />
            {/* {incompleteSections &&
                incompleteSections.map((section) => {
                    return (
                        <HistoryForm
                            historyData={historyData}
                            section={section}
                            key={`${section}form`}
                            handleSectionSubmission={handleSectionSubmission}
                        />
                    );
                })}
            <PeopleSection
                incompletePeople={incompletePeople}
                characterData={characterData}
                friends={friends}
                handleSubmitFriend={handleSubmitFriend}
                handleSubmitRival={handleSubmitRival}
            /> */}
            <ActionsForm actions={actions} characterData={characterData} />
        </>
    );
}
