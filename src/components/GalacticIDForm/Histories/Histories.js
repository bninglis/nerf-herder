import "./Histories.scss";
import HistoryForm from "./HistoryForm/HistoryForm";

export default function Histories({
    historyData,
    handleHistorySectionSubmission,
    formErrors,
    incompleteSections,
    characterData,
}) {
    const historyArray = Object.keys(incompleteSections.history).map((key) => {
        if (incompleteSections["history"][key] === true) {
            return key;
        }
    });
    if (
        incompleteSections.history.heritages === true ||
        incompleteSections.history.backgrounds === true ||
        incompleteSections.history.vices === true
    ) {
        return (
            <div className="histories">
                {historyArray &&
                    historyArray.map((section) => {
                        if (!!section) {
                            return (
                                <HistoryForm
                                    historyData={historyData}
                                    section={section}
                                    key={`${section}form`}
                                    handleHistorySectionSubmission={handleHistorySectionSubmission}
                                    formErrors={formErrors}
                                    characterData={characterData}
                                />
                            );
                        }
                    })}
            </div>
        );
    }
}
