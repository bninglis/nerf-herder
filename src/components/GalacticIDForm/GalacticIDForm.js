import "./GalacticIDForm.scss";
import { useState } from "react";

export default function GalacticIDForm({ refData }) {
    const { playbook: playbookArray, heritages, backgrounds, friends } = refData;
    const playbook = playbookArray[0]
    return (
        <>
            <div>
                <button><h2>{playbook.playbook}</h2></button>
                <button><div></div></button>
            </div>
        </>
    );
}
