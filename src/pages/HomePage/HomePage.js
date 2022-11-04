import { useState } from "react";

export default function HomePage() {
    const [isTextDisplayed, setIsTextDisplayed] = useState(false);
    return (
        <>
            <div>
                <h2 className="splash__tagline splash__tagline--upper">Head out,</h2>
                <h2 className="splash__tagline splash__tagline--lower">into the black</h2>
                <p className={`splash__text${!isTextDisplayed?' splash__text--visible':' splash__text--none'}`}>Nerf Herder is an app used to streamline character creation in the <span className="bold">Scum and Villainy</span> tabletop role-playing game. <span className="bold">Scum and Villainy</span> is a Forged in the Dark game published by <span className="bold">Evil Hat Productions</span>.</p>
                <div>
                    <button>
                        <p>start a new adventure</p>
                    </button>
                    <p>or <button>Login</button></p>
                </div>
            </div>
        </>
    );
}
