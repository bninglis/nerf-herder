import "./NameForm.scss";
import RandomButton from "./RandomButton/RandomButton";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function NameForm({
    handleNameSubmit,
    first,
    last,
    alias,
    look,
    incompleteSections,
    formErrors,
}) {
    const [randomHovers, setRandomHovers] = useState({
        first: false,
        last: false,
        alias: false,
        look: false,
    });
    const [cookies] = useCookies(["characterData"]);
    const characterData = cookies.characterData;
    const initialNameValues = { first: "", last: "", alias: "", look: "" };
    const [nameFormValues, setNameFormValues] = useState(initialNameValues);
    const handleMouseEnter = (e, input) => {
        setRandomHovers({ ...randomHovers, [input]: true });
    };
    const handleMouseLeave = (e, input) => {
        setRandomHovers({ ...randomHovers, [input]: false });
    };
    useEffect(() => {
        if (!!characterData.firstName) {
            const formFromLoaded = {
                first: characterData.firstName,
                last: characterData.lastName,
                alias: characterData.alias,
                look: characterData.look,
            };
            setNameFormValues(formFromLoaded);
        }
         // eslint-disable-next-line
    }, []);
    const handleRandomSuggestion = (e) => {
        const idValue = e.currentTarget.id;
        const tables = { first: first, last: last, alias: alias, look: look };

        const pickRandomChangeValue = (tableName, tableData) => {
            const tableItem =
                tableName === "first"
                    ? "name"
                    : tableName === "last"
                    ? "name"
                    : tableName === "alias"
                    ? "alias"
                    : "item";
            const randomNumber = Math.floor(Math.random() * tableData[tableName].length);
            return tableData[tableName][randomNumber][tableItem];
        };

        setNameFormValues({ ...nameFormValues, [idValue]: pickRandomChangeValue(idValue, tables) });
    };
    const handleNameChange = (e) => {
        const fixedName = e.target.name.slice(4);
        setNameFormValues({ ...nameFormValues, [fixedName]: e.target.value });
    };
    if (incompleteSections.name === true) {
        return (
            <div className="name-form">
                <div className="name-form__preamble">
                    <h3 className="name-form__title">
                        Enter Character Name and a Short Physical Description
                    </h3>
                    <p className="name-form__text">
                        or press the button to the side for suggestions
                    </p>
                </div>
                <form
                    className="name-form__form"
                    onSubmit={(e) => {
                        handleNameSubmit(e, nameFormValues);
                    }}
                >
                    <div className="name-form__column">
                        <div className="name-form__first name-form__unit">
                            <label className="name-form__label" htmlFor="namefirst">
                                First Name:
                            </label>
                            <input
                                className={`name-form__input${
                                    formErrors.first ? " name-form__input--error" : ""
                                }`}
                                name="namefirst"
                                value={nameFormValues.first}
                                onChange={handleNameChange}
                            />
                            <button
                                id="first"
                                type="button"
                                item="name"
                                onClick={handleRandomSuggestion}
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e, "first");
                                }}
                                onMouseLeave={(e) => {
                                    handleMouseLeave(e, "first");
                                }}
                                className="name-form__random"
                            >
                                <RandomButton
                                    input={"first"}
                                    randomHovers={randomHovers}
                                    error={formErrors.first ? true : false}
                                />
                            </button>
                        </div>
                        <div className="name-form__last name-form__unit">
                            <label className="name-form__label" htmlFor="namelast">
                                Last Name:
                            </label>
                            <input
                                className={`name-form__input${
                                    formErrors.last ? " name-form__input--error" : ""
                                }`}
                                name="namelast"
                                value={nameFormValues.last}
                                onChange={handleNameChange}
                            />
                            <button
                                id="last"
                                type="button"
                                item="name"
                                onClick={handleRandomSuggestion}
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e, "last");
                                }}
                                onMouseLeave={(e) => {
                                    handleMouseLeave(e, "last");
                                }}
                                className="name-form__random"
                            >
                                <RandomButton
                                    input={"last"}
                                    randomHovers={randomHovers}
                                    error={formErrors.last ? true : false}
                                />
                            </button>
                        </div>
                        <div className="name-form__alias name-form__unit">
                            <label className="name-form__label" htmlFor="namealias">
                                Alias:
                            </label>
                            <input
                                className={`name-form__input${
                                    formErrors.alias ? " name-form__input--error" : ""
                                }`}
                                name="namealias"
                                value={nameFormValues.alias}
                                onChange={handleNameChange}
                            />
                            <button
                                id="alias"
                                type="button"
                                item="alias"
                                onClick={handleRandomSuggestion}
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e, "alias");
                                }}
                                onMouseLeave={(e) => {
                                    handleMouseLeave(e, "alias");
                                }}
                                className="name-form__random"
                            >
                                <RandomButton
                                    input={"alias"}
                                    randomHovers={randomHovers}
                                    error={formErrors.alias ? true : false}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="name-form__look name-form__unit">
                        <label className="name-form__label" htmlFor="namelook">
                            Description:
                        </label>
                        <textarea
                            className={`name-form__input name-form__input--description${
                                formErrors.first ? " name-form__input--error" : ""
                            }`}
                            name="namelook"
                            value={nameFormValues.look}
                            onChange={handleNameChange}
                        />
                        <button
                            id="look"
                            type="button"
                            item="item"
                            onClick={handleRandomSuggestion}
                            onMouseEnter={(e) => {
                                handleMouseEnter(e, "look");
                            }}
                            onMouseLeave={(e) => {
                                handleMouseLeave(e, "look");
                            }}
                            className="name-form__random name-form__random--description"
                        >
                            <RandomButton
                                input="look"
                                randomHovers={randomHovers}
                                error={formErrors.look ? true : false}
                            />
                        </button>
                    </div>
                    <div className="name-form__final">
                        <button className="name-form__submit" type="submit">
                            Submit Name
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
