import "./Projector.scss";

export default function Projector({ projectorPosition, handleNextStage }) {
    return (
        <div className="projector__container" onTransitionEnd={handleNextStage}>
            <div
                className={`projector__lights${
                    !!projectorPosition ? " projector__lights--position2" : ""
                }`}
            >
                <div className="projector__beam--container">
                    <div
                        className={`projector__beam${
                            !!projectorPosition ? " projector__beam--position2" : ""
                        }`}
                    ></div>
                </div>
                <div className="projector__source"></div>
            </div>
            <div
                className={`projector__circles${
                    !!projectorPosition ? " projector__circles--position2" : ""
                }`}
            >
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--1--position2" : ""
                    } projector__ellipse--1`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--2--position2" : ""
                    } projector__ellipse--2`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--3--position2" : ""
                    } projector__ellipse--3`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--4--position2" : ""
                    } projector__ellipse--4`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--5--position2" : ""
                    } projector__ellipse--5`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--6--position2" : ""
                    } projector__ellipse--6`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--7--position2" : ""
                    } projector__ellipse--7`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--8--position2" : ""
                    } projector__ellipse--8`}
                ></div>
                <div
                    className={`projector__ellipse${
                        !!projectorPosition ? " projector__ellipse--9--position2" : ""
                    } projector__ellipse--9`}
                ></div>
            </div>
        </div>
    );
}
