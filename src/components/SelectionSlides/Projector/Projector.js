import "./Projector.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Projector({ projectorPosition, selectedID }) {
    const [introToggle, setIntroToggle] = useState(false);
    const { introToggle: paramsToggle } = useParams();
    const navigate = useNavigate();
    const [sourceStart, setSourceStart] = useState(false);
    const handleGoToForm = () => {
        navigate(`/${selectedID}/introform`);
    };
    useEffect(() => {
        if (paramsToggle === "true") {
            setIntroToggle(true);
        } else {
            setIntroToggle(false);
        }
         // eslint-disable-next-line
    }, []);
    if(paramsToggle)
    return (
        <div className="projector__container" onTransitionEnd={handleGoToForm}>
            <div
                className={`projector__lights${
                    !!projectorPosition ? " projector__lights--position2" : ""
                }`}
            >
                <div className="projector__beam--container">
                    <div
                        className={`projector__beam${
                            !!projectorPosition ? " projector__beam--position2" : ""
                        }${introToggle ? " projector__beam--intro" : ""}`}
                    ></div>
                </div>
                <div
                    className={`${!sourceStart ? "projector__source--off" : "projector__source"}${
                        introToggle ? " projector__source--intro" : ""
                    }`}
                ></div>
                <div
                    className={`${!!sourceStart ? "projector__backup--off" : "projector__backup"} ${
                        introToggle ? " projector__backup--intro" : ""
                    }`}
                ></div>
            </div>
            <div
                className={`projector__circles${
                    !!projectorPosition ? " projector__circles--position2" : ""
                }`}
                onAnimationEnd={() => {
                    setTimeout(() => {
                        setSourceStart(true);
                    }, 500);
                }}
            >
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--1--position2" : ""
                    } projector__ellipse--1${introToggle ? " projector__ellipse--1--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--2--position2" : ""
                    } projector__ellipse--2${introToggle ? " projector__ellipse--2--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--3--position2" : ""
                    } projector__ellipse--3${introToggle ? " projector__ellipse--3--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--4--position2" : ""
                    } projector__ellipse--4${introToggle ? " projector__ellipse--4--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--5--position2" : ""
                    } projector__ellipse--5${introToggle ? " projector__ellipse--5--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--6--position2" : ""
                    } projector__ellipse--6${introToggle ? " projector__ellipse--6--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--7--position2" : ""
                    } projector__ellipse--7${introToggle ? " projector__ellipse--7--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--8--position2" : ""
                    } projector__ellipse--8${introToggle ? " projector__ellipse--8--intro" : ""}`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--9--position2" : ""
                    } projector__ellipse--9${introToggle ? " projector__ellipse--9--intro" : ""}`}
                ></div>
            </div>
        </div>
    );
}
