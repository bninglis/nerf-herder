import "./ProjectorStationary.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectorStationary({ projectorPosition }) {
    const [sourceStart, setSourceStart] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="stationary__container"
            onTransitionEnd={() => {
                navigate("/playbook/false");
            }}
        >
            <div
                className={`stationary__lights${
                    !!projectorPosition ? " stationary__lights--position2" : ""
                }`}
            >
                <div className="stationary__beam--container">
                    <div
                        className={`stationary__beam${
                            !!projectorPosition ? " stationary__beam--position2" : ""
                        }`}
                    ></div>
                </div>
                <div
                    className={!sourceStart ? "stationary__source--off" : "stationary__source"}
                ></div>
                <div
                    className={!!sourceStart ? "stationary__backup--off" : "stationary__backup"}
                ></div>
            </div>
            <div
                className={`stationary__circles${
                    !!projectorPosition ? " stationary__circles--position2" : ""
                }`}
                onAnimationEnd={() => {
                    setTimeout(() => {
                        setSourceStart(true);
                    }, 500);
                }}
            >
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--1--position2" : ""
                    } stationary__ellipse--1`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--2--position2" : ""
                    } stationary__ellipse--2`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--3--position2" : ""
                    } stationary__ellipse--3`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--4--position2" : ""
                    } stationary__ellipse--4`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--5--position2" : ""
                    } stationary__ellipse--5`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--6--position2" : ""
                    } stationary__ellipse--6`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--7--position2" : ""
                    } stationary__ellipse--7`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--8--position2" : ""
                    } stationary__ellipse--8`}
                ></div>
                <div
                    className={`stationary__ellipse${
                        !!projectorPosition ? " stationary__ellipse--9--position2" : ""
                    } stationary__ellipse--9`}
                ></div>
            </div>
        </div>
    );
}
