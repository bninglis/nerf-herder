import "./GalacticIDForm.scss";
import IDCard from "./IDCard/IDCard";
import HistoryForm from "./HistoryForm/HistoryForm";
import { useState } from "react";

export default function GalacticIDForm({ refData, characterData }) {
    const { playbook: playbookArray, heritages, backgrounds, friends, vices } = refData;
    const historyData = { heritages: heritages, backgrounds: backgrounds, vices: vices };
    const playbook = playbookArray[0];
    const [incompleteSections, setIncompleteSections] = useState([
        "heritages",
        "backgrounds",
        "vices",
    ]);
    return (
        <>
            <IDCard characterData={characterData} />
            {incompleteSections && incompleteSections.map((section) => {
                return <HistoryForm historyData={historyData} section={section} key={`${section}form`} />;
            })}
        </>
    );
}
