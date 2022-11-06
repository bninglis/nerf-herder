import "./GalacticIDForm.scss";
import IDCard from "./IDCard/IDCard";
import HistoryForm from "./HistoryForm/HistoryForm";
import PeopleSection from "./PeopleSection/PeopleSection";
import NameForm from "./NameForm/NameForm";
import ActionsForm from "./ActionsForm/ActionsForm";
import AcceptWindow from "./AcceptWindow/AcceptWindow";

export default function GalacticIDForm({
    refData,
    characterData,
    handleSectionSubmission,
    incompleteSections,
    incompletePeople,
    handleSubmitFriend,
    handleSubmitRival,
    handleSubmitActions,
    handleNameSubmit,
    idCompletion,
    handleNextStage,
}) {
    const {
        heritages,
        backgrounds,
        friends,
        vices,
        actions,
        first_names,
        last_names,
        aliases,
        signature,
    } = refData;
    const historyData = { heritages: heritages, backgrounds: backgrounds, vices: vices };

    return (
        <>
            <IDCard characterData={characterData} />
            <AcceptWindow handleNextStage={handleNextStage} idCompletion={idCompletion} />
            <div
                className={
                    !idCompletion.name
                        ? "name-form__container"
                        : "name-form__container name-form__container--hidden"
                }
            >
                <NameForm
                    handleNameSubmit={handleNameSubmit}
                    first={first_names}
                    last={last_names}
                    alias={aliases}
                    look={signature}
                />
            </div>
            <div
                className={
                    !idCompletion.history
                        ? "history-form__container"
                        : "history-form__container history-form__container--hidden"
                }
            >
                {incompleteSections &&
                    incompleteSections.map((section) => {
                        return (
                            <HistoryForm
                                historyData={historyData}
                                section={section}
                                key={`${section}form`}
                                handleSectionSubmission={handleSectionSubmission}
                            />
                        );
                    })}
            </div>
            <div
                className={
                    !idCompletion.people
                        ? "people__container"
                        : "people__container people__container--hidden"
                }
            >
                <PeopleSection
                    incompletePeople={incompletePeople}
                    characterData={characterData}
                    friends={friends}
                    handleSubmitFriend={handleSubmitFriend}
                    handleSubmitRival={handleSubmitRival}
                />
            </div>
            <div
                className={
                    !idCompletion.actions
                        ? "actions__container"
                        : "actions__container actions__container--hidden"
                }
            >
                <ActionsForm
                    actions={actions}
                    characterData={characterData}
                    handleSubmitActions={handleSubmitActions}
                />
            </div>
        </>
    );
}
