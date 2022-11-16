import "./PlaybookPage.scss";
import SelectionSlides from "../../components/SelectionSlides/SelectionSlides";
import Projector from "../../components/SelectionSlides/Projector/Projector";
import { useState } from "react";

export default function PlaybookPage() {
    const BACKEND_URL = process.env.REACT_APP_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `${BACKEND_URL}${BACKEND_PORT}`;
    const [selectedID, setSelectedID] = useState();

    // this is used for triggering transition animations
    const [projectorPosition, setProjectorPosition] = useState(false);

    const handleSelectPlaybook = (e, id) => {
        setSelectedID(id);
    };

    return (
        <div className="character__container">
            <div className="character">
                <div className="desktop-boundary">
                    <Projector projectorPosition={projectorPosition} selectedID={selectedID} />
                    <div className="slidebox">
                        <SelectionSlides
                            handleSelectPlaybook={handleSelectPlaybook}
                            apiUrl={apiUrl}
                            setProjectorPosition={setProjectorPosition}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
