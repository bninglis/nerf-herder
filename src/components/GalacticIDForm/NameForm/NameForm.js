import "./NameForm.scss";
import { useState } from "react";

export default function NameForm({
    handleNameSubmit,
    first,
    last,
    alias,
    look,
    incompleteSections,
}) {
    const initialNameValues = { first: "", last: "", alias: "", look: "" };
    const [nameFormValues, setNameFormValues] = useState(initialNameValues);
    const handleRandomSuggestion = (e) => {
        const idValue = e.target.id;
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
                <h3>Enter Character Name and Short Physical Description</h3>
                <p>Press the button to the side for suggestions</p>
                <form
                    className="name-form"
                    onSubmit={(e) => {
                        handleNameSubmit(e, nameFormValues);
                    }}
                >
                    <label className="name-form__label" htmlFor="namefirst"></label>
                    <input
                        className="name-form__input"
                        name="namefirst"
                        value={nameFormValues.first}
                        onChange={handleNameChange}
                    />
                    <button id="first" type="button" item="name" onClick={handleRandomSuggestion}>
                        R
                    </button>
                    <label className="name-form__label" htmlFor="namelast"></label>
                    <input
                        className="name-form__input"
                        name="namelast"
                        value={nameFormValues.last}
                        onChange={handleNameChange}
                    />
                    <button id="last" type="button" item="name" onClick={handleRandomSuggestion}>
                        R
                    </button>
                    <label className="name-form__label" htmlFor="namealias"></label>
                    <input
                        className="name-form__input"
                        name="namealias"
                        value={nameFormValues.alias}
                        onChange={handleNameChange}
                    />
                    <button id="alias" type="button" item="alias" onClick={handleRandomSuggestion}>
                        R
                    </button>
                    <label className="name-form__label" htmlFor="namelook"></label>
                    <textarea
                        className="name-form__input"
                        name="namelook"
                        value={nameFormValues.look}
                        onChange={handleNameChange}
                    />
                    <button id="look" type="button" item="item" onClick={handleRandomSuggestion}>
                        R
                    </button>
                    <button></button>
                </form>
            </div>
        );
    }
}
