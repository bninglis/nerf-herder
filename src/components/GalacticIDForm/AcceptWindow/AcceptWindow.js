import "./AcceptWindow.scss";
import { useCookies } from "react-cookie";

export default function AcceptWindow({ handleNextStage, incompleteSections }) {
    const [cookies, setCookie] = useCookies(["characterData"]);
    if (
        incompleteSections.name === false &&
        incompleteSections.history.heritages === false &&
        incompleteSections.history.backgrounds === false &&
        incompleteSections.history.vices === false &&
        incompleteSections.people.friend === false &&
        incompleteSections.people.rival === false &&
        incompleteSections.actions === false
    ) {
        return (
            <div className="accept-id">
                <h2 className="accept-id__title">Accept Current Character ID?</h2>
                <button className="accept-id__button" onClick={handleNextStage}>
                    <svg
                        className="accept-id__check"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                    >
                        <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
                    </svg>
                </button>
            </div>
        );
    }
}
