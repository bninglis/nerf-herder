import "./HomePage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function HomePage() {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const navigate = useNavigate();

    const handleNewAdventure = () => {
        navigate("/character");
    };

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }
    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }

    return (
        <>
            <div className="home-container">
                <h2 className="home splash__tagline splash__tagline--upper">Head out,</h2>
                <h2 className="home splash__tagline splash__tagline--lower">into the black</h2>
                <div className="splash__actions">
                    <button
                        onClick={handleNewAdventure}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="splash__button"
                    >
                        <div className={`button-div__container ${!!isMouseOver?" button-div__container--hover":""}`}>
                            <div className={`button-div button-div--short${!!isMouseOver?" button-div--hover":""}`}></div>
                            <div className={`button-div button-div--short${!!isMouseOver?" button-div--hover":""}`}></div>
                            <div className={`button-div button-div--long${!!isMouseOver?" button-div--hover":""}`}></div>
                        </div>
                        <p className={`splash__button-text ${!!isMouseOver?" splash__button-text--hover":""}`}>start a new adventure</p>
                    </button>
                    <p className="splash__login">
                        or{" "}
                        <Link className="splash__login--link" to="/user">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
