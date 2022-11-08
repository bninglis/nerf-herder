import "./GalacticIDForm.scss";
import IDCard from "./IDCard/IDCard";
import Histories from "./Histories/Histories";
import PeopleSection from "./PeopleSection/PeopleSection";
import NameForm from "./NameForm/NameForm";
import ActionsForm from "./ActionsForm/ActionsForm";
import AcceptWindow from "./AcceptWindow/AcceptWindow";

export default function GalacticIDForm({
    refData,
    characterData,
    setCharacterData,
    handleHistorySectionSubmission,
    incompleteSections,
    handleSubmitPerson,
    handleSubmitActions,
    handleNameSubmit,
    handleNextStage,
    formErrors,
    handleEdit,
    handleChangeAbility,
    handleChangePlaybook
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
            <IDCard
                characterData={characterData}
                handleEdit={handleEdit}
                incompleteSections={incompleteSections}
                handleChangeAbility={handleChangeAbility}
                handleChangePlaybook={handleChangePlaybook}
            />
            <AcceptWindow
                handleNextStage={handleNextStage}
                incompleteSections={incompleteSections}
            />
            <NameForm
                handleNameSubmit={handleNameSubmit}
                first={first_names}
                last={last_names}
                alias={aliases}
                look={signature}
                incompleteSections={incompleteSections}
                refData={refData}
            />
            <Histories
                historyData={historyData}
                handleHistorySectionSubmission={handleHistorySectionSubmission}
                formErrors={formErrors}
                incompleteSections={incompleteSections}
                characterData={characterData}
            />
            <PeopleSection
                incompleteSections={incompleteSections}
                characterData={characterData}
                friends={friends}
                handleSubmitPerson={handleSubmitPerson}
                formErrors={formErrors}
                refData={refData}
            />
            <ActionsForm
                actions={actions}
                characterData={characterData}
                setCharacterData={setCharacterData}
                handleSubmitActions={handleSubmitActions}
                formErrors={formErrors}
                incompleteSections={incompleteSections}
            />
        </>
    );
}
