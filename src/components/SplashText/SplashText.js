import "./SplashText.scss";
import { useNavigate, Link } from "react-router-dom";

export default function SplashText({ isTextDisplayed }) {
    const navigate = useNavigate();
    const handleBeginAdventure = () => {
        navigate("/character/0");
    };
    if (!!isTextDisplayed) {
        return (
            <div className="">
                <div className="splash">
                    <p className="splash__text">
                        Nerf Herder is an app used to streamline character creation in the{" "}
                        <span className="bold">Scum and Villainy</span> tabletop role-playing game.{" "}
                        <span className="bold">Scum and Villainy</span> is a Forged in the Dark game
                        published by <span className="bold">Evil Hat Productions</span>.
                    </p>
                    <button onClick={handleBeginAdventure}>Start a new journey</button>
                </div>
            </div>
        );
    }
}
