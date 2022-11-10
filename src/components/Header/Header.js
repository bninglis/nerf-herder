import "./Header.scss";
import LinkOrName from "./LinkOrName/LinkOrName";
import MenuSVG from "./MenuSVG/MenuSVG";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const handleMouseEnter = () => {
        setIsVisible(true);
    };
    const handleMouseLeave = () => {
        setIsVisible(false);
    };
    return (
        <>
            <div className="header">
                <Link className="header__link" to="/">
                    <h1 className="header__title">Nerf Herder</h1>
                </Link>
                <div
                    className="menu__container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseOver={handleMouseEnter}
                >
                    <button
                        className="menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseOver={handleMouseEnter}
                    >
                        <MenuSVG isVisible={isVisible} />
                    </button>
                    <div className={`menu__drawer${isVisible ? " menu__drawer--visible" : ""}`}>
                        <div
                            className={`menu__slidein${
                                !!isVisible ? " menu__slidein--visible" : ""
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseOver={handleMouseEnter}
                        >
                            <LinkOrName isVisible={isVisible} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
