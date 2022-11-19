import "./PlaybookPage.scss";
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";
import ProjectorStationary from "../../components/ProjectorStationary/ProjectorStationary";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function CharacterSheetPage({ loadCharacterData }) {
    const navigate = useNavigate();
    const refData = JSON.parse(sessionStorage.getItem("refData"));
    const [cookies, setCookies] = useCookies("characterData");
    const characterDataInit = cookies.characterData;
    const [characterData, setCharacterData] = useState(characterDataInit);
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;

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
