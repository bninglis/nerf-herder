import "./PlaybookPage.scss";
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";
import ProjectorStationary from "../../components/ProjectorStationary/ProjectorStationary";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function CharacterSheetPage({ loadCharacterData }) {

    const refData = JSON.parse(sessionStorage.getItem("refData"));
    const [cookies] = useCookies("characterData");
    const characterDataInit = cookies.characterData;
    const [characterData, setCharacterData] = useState(characterDataInit);

    while (!!characterData) {
        return (
            <div className="character__container">
                <ProjectorStationary projectorPosition={true} />
                <div className="character">
                    <div className="desktop-boundary">
                        <CharacterSheet
                            characterData={characterData}
                            refData={refData}
                            setCharacterData={setCharacterData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
