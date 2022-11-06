import "./AcceptWindow.scss";

export default function AcceptWindow({ handleNextStage, idCompletion }) {
    return (
        <div
            className={`id-accept__container ${
                idCompletion.name === true &&
                idCompletion.history === true &&
                idCompletion.people === true &&
                idCompletion.actions === true
                    ? "id-accept__container--visible"
                    : "id-accept__container--hidden"
            } `}
        >
            <div>
                <h2>Accept Current Character ID?</h2>
                <button onClick={handleNextStage}>Yes</button>
            </div>
        </div>
    );
}
