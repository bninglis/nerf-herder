import "./PlaybookPage.scss";
import SelectionSlides from "../../components/SelectionSlides/SelectionSlides";
import BlockForm from "../../components/BlockForm/BlockForm";
import { useState } from "react";
import axios from "axios";

export default function PlaybookPage() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `http://localhost:${BACKEND_PORT}`;
    const [selectedPlaybook, setSelectedPlaybook] = useState(null);
    const [beginForm, setBeginForm] = useState(true); // TODO: set back to false
    const handleSelectPlaybook = (e, currentPlaybook, id) => {
        setSelectedPlaybook(currentPlaybook);
        axios.get(`${apiUrl}/ref/${id}`).then((response) => {
            console.log(response.data);
        });
    };
    const handleMovetoForm = () => {
        setBeginForm(true);
    };
    if (!beginForm) {
        return (
            <>
                <SelectionSlides
                    handleSelectPlaybook={handleSelectPlaybook}
                    handleMovetoForm={handleMovetoForm}
                />
            </>
        );
    } else {
        return (
            <>
                <BlockForm />
            </>
        );
    }
}
