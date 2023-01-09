import axios from "axios";
import "./DeleteModal.scss";

export default function DeleteModal({ isDeleteVisible, setIsDeleteVisible, apiUrl }) {
    const handleDelete = () => {
        axios
            .delete(`${apiUrl}users/characters/${isDeleteVisible.character.id}`)
            .then((response) => {
                setIsDeleteVisible({ toggle: false, character: "" });
            });
    };
    const handleBackOut = () => {
        setIsDeleteVisible({ toggle: false, character: "" });
    };
    if (!!isDeleteVisible.toggle) {
        return (
            <div className="delete__background">
                <div className="delete__window">
                    <h2 className="delete__text">
                        Are you sure you want to delete {isDeleteVisible.character.first}{" "}
                        {isDeleteVisible.character.last}?
                    </h2>
                    <button className="delete__button" onClick={handleDelete}>OK</button>
                    <button className="delete__button" onClick={handleBackOut}>Cancel</button>
                </div>
            </div>
        );
    }
}
