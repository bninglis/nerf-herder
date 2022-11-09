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
        <div className={`history history--${section}`}>
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
                                <svg
                                    className={`choices__bullet choices__bullet--${data.type}${
                                        selectedOption === index ? " choices__bullet--selected" : ""
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 62.69 65.02"
                                >
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="layer">
                                            <path
                                                className={`choices__path01 choices__path01 choices__path01--${
                                                    data.type
                                                }${
                                                    selectedOption === index
                                                        ? " choices__path01--selected"
                                                        : ""
                                                }`}
                                                d="M54.93,32.62h2.88v0a27.83,27.83,0,0,0-.26-3.79H61a31.59,31.59,0,0,0-6-15.16L52.5,16.09A28.26,28.26,0,0,0,48,11.15L51,8.1l-.74-.6A32.61,32.61,0,0,0,29.53,0h-.86V4.3A28.3,28.3,0,0,0,1.2,32.59v0H4.08a25.39,25.39,0,0,0,9.36,19.67l-2,2A28.17,28.17,0,0,0,29,60.88V58h.47A25.43,25.43,0,0,0,54.93,32.62ZM29.53.87A31.54,31.54,0,0,1,49.74,8.16l-2.43,2.43A28.17,28.17,0,0,0,29.53,4.28Zm0,56.7a25,25,0,1,1,25-25A25,25,0,0,1,29.5,57.57Z"
                                            />
                                            <path d="M25.43,3.23V1.37A31.23,31.23,0,0,0,12.26,6.25L13.6,7.59A29.37,29.37,0,0,1,25.43,3.23Z" />
                                            <path d="M44.28,19.38l-3.49,3.49a14.89,14.89,0,0,1,0,19.46l3.48,3.49a19.79,19.79,0,0,0,0-26.44Z" />
                                            <path d="M22.55,52.18V50.74a19.4,19.4,0,0,1-7-4.62l3.21-3.22a14.89,14.89,0,0,1-.52-20.06L15,19.62a19.41,19.41,0,0,1,7.53-5.19V13a20.79,20.79,0,0,0,0,39.19Z" />
                                            <path d="M2,36.72a1,1,0,0,0-1-1,1,1,0,1,0,1,1Z" />
                                            <path d="M2.58,40a1,1,0,0,0-1-1,1,1,0,0,0,.05,2A1,1,0,0,0,2.58,40Z" />
                                            <path d="M3.39,43.12a1,1,0,0,0-2,.05,1,1,0,0,0,1,1A1,1,0,0,0,3.39,43.12Z" />
                                            <path d="M4.77,46.1a1,1,0,0,0-1-1,1,1,0,0,0-1,1,1,1,0,0,0,1,1A1,1,0,0,0,4.77,46.1Z" />
                                            <path d="M5.37,47.85a1,1,0,1,0,1,1A1,1,0,0,0,5.37,47.85Z" />
                                            <path d="M7.31,50.49a1,1,0,0,0-1,1,1,1,0,1,0,1-1Z" />
                                            <path d="M7.23,32.59v-.17H5.73v.17A23.77,23.77,0,0,0,28.51,56.34v-1.5A22.27,22.27,0,0,1,7.23,32.59Z" />
                                            <path d="M29.5,8.81a23.67,23.67,0,0,0-15.33,5.61l1.07,1.06A22.27,22.27,0,0,1,46.61,46.85l1.06,1.07A23.77,23.77,0,0,0,29.5,8.81Z" />
                                            <path d="M61.25,33.77a32,32,0,0,1-1.86,9.57c-1.07-.36-2.13-.73-3.19-1.12a29.11,29.11,0,0,0,1.47-6.14H56a26.72,26.72,0,0,1-22.7,23v1.68a28.37,28.37,0,0,0,7.35-2c.46,1,.91,2.07,1.35,3.11a31.08,31.08,0,0,1-5.33,1.75V65a33.22,33.22,0,0,0,26-31.25Zm-18,27.33L42.36,59A29.49,29.49,0,0,0,56.6,43.9c.79.29,1.5.54,2.19.77A31.84,31.84,0,0,1,43.28,61.1Z" />
                                            <path d="M42.6,16.31A20.86,20.86,0,0,0,29.5,11.7c-.44,0-.87,0-1.3.05,0,.17.07.35.1.52.4,0,.8,0,1.2,0a20.25,20.25,0,0,1,12.75,4.49C42.36,16.58,42.48,16.45,42.6,16.31Z" />
                                        </g>
                                    </g>
                                </svg>
                                <h3 className="choices__subheader">{data.type.toLowerCase()}</h3>
                            </button>
                        );
                    })}
            </div>
            <div className="choices__details">
                <p className="choices__text">{data[selectedOption].description}</p>
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
                        <h3 className="choices__button-text">
                            Select
                        </h3>
                    </button>
                </form>
            </div>
        </div>
    );
}
