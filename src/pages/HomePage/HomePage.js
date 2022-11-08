import "./HomePage.scss";
import { useState } from "react";

import SplashText from "../../components/SplashText/SplashText";

export default function HomePage() {
    const handleNewAdventure = () => {
        setIsTextDisplayed(true);
    };

    const [isTextDisplayed, setIsTextDisplayed] = useState(false);
    return (
        <>
            <div>
                <h2 className="splash__tagline splash__tagline--upper">Head out,</h2>
                <h2 className="splash__tagline splash__tagline--lower">into the black</h2>
                <SplashText isTextDisplayed={isTextDisplayed} />
                <div>
                    <button onClick={handleNewAdventure}>
                        <p>start your adventure</p>
                    </button>
                </div>
            </div>
        </>
    );
}
