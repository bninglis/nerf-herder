import "./HistoryForm.scss";
import { useState } from "react";

export default function HistoryForm({ historyData, section }) {
    const [selectedOption, setSelectedOption] = useState(0);
    let singularSection = section.split("");
    singularSection.pop();
    singularSection = singularSection.join("");
    console.log(singularSection);
    const data = historyData[section];
    const handleClickOption = (e, index) => {
        setSelectedOption(index);
    };
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
                                key={data.id}
                                onClick={(e) => {
                                    handleClickOption(e, index);
                                }}
                            >
                                <h3>{data.type}</h3>
                            </button>
                        );
                    })}
            </div>
            <div>
                <p>{data[selectedOption].description}</p>
                <form className={`choices__elaboration choices__elaboration--${section}`}>
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
                            ? `your ${data[selectedOption].type} background`
                            : ""}
                        {section === "vices"
                            ? `how you satisfy your urge for ${data[selectedOption].type}`
                            : ""}
                    </label>
                    <textarea
                        name={`${section}-field`}
                        className={`choices__field choices__field--${section}`}
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
