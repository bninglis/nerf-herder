import "./HistoryForm.scss";
import { useState, useEffect } from "react";

export default function HistoryForm({
    historyData,
    section,
    handleHistorySectionSubmission,
    formErrors,
    characterData,
}) {
    const isLoaded = localStorage.getItem("loadCharacter");
    const [selectedOption, setSelectedOption] = useState(0);
    const [fieldSubmission, setFieldSubmission] = useState("");
    let singularSection = section.split("");
    singularSection.pop();
    singularSection = singularSection.join("");
    const data = historyData[section];
    const handleClickOption = (e, index) => {
        setSelectedOption(index);
    };
    const handleFieldChange = (e) => {
        setFieldSubmission(e.target.value);
    };
    useEffect(() => {
        if (!!isLoaded) {
            setFieldSubmission(characterData[`${singularSection}_story`]);
        }
    }, []);
    return (
        <div>
            <div className="choices">
                {data &&
                    data.map((data, index) => {
                        return (
                            <button
                                className={`choices__choice choices__choice--${data.type}${
                                    selectedOption === index ? " choices__choice--selected" : ""
                                }`}
                                id={data.id}
                                key={`${section}-${data.id}`}
                                onClick={(e) => {
                                    handleClickOption(e, index);
                                }}
                            >
                                <h3>{data.type.toLowerCase()}</h3>
                            </button>
                        );
                    })}
            </div>
            <div>
                <p>{data[selectedOption].description}</p>
                <form
                    className={`choices__elaboration choices__elaboration--${section}`}
                    onSubmit={(e) => {
                        handleHistorySectionSubmission(
                            e,
                            section,
                            data[selectedOption].id,
                            data[selectedOption].type.toLowerCase(),
                            singularSection,
                            fieldSubmission
                        );
                    }}
                >
                    <label
                        htmlFor={`${section}-field`}
                        className={`choices__label choices__label--${section}`}
                    >
                        Write briefly about{" "}
                        {section === "heritages"
                            ? `growing up as a${
                                  data[selectedOption].type === "imperial" ? "n" : ""
                              } ${data[selectedOption].type}`
                            : ""}
                        {section === "backgrounds"
                            ? `your ${data[selectedOption].type.toLowerCase()} background`
                            : ""}
                        {section === "vices"
                            ? `how you satisfy your urge for ${data[
                                  selectedOption
                              ].type.toLowerCase()}`
                            : ""}
                    </label>
                    <textarea
                        name={`${section}-field`}
                        className={`choices__field choices__field--${section}${
                            !!formErrors[section] ? " choices__field--error" : ""
                        }`}
                        onChange={handleFieldChange}
                        placeholder="Please enter here..."
                        value={fieldSubmission}
                    ></textarea>
                    <button type="submit" className={`choices__submit choices__submit--${section}`}>
                        <h3>
                            Select <span>{singularSection}</span>
                        </h3>
                    </button>
                </form>
            </div>
        </div>
    );
}
