import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PlaybookPage from "./pages/PlaybookPage/PlaybookPage";
import BlockFormPage from "./pages/BlockFormPage/BlockFormPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import GalacticIDFormPage from "./pages/GalacticIDFormPage/GalacticIDFormPage";
import CharacterSheetPage from "./pages/CharacterSheetPage/CharacterSheetPage";

function App() {
    const [refData, setRefData] = useState(null);
    const [loadCharacterData, setLoadCharacterData] = useState(null);
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/playbook/:introToggle" element={<PlaybookPage />} />
                        <Route path="/:id/introform" element={<BlockFormPage />} />
                        <Route path="/idform" element={<GalacticIDFormPage />} />
                        <Route
                            path="/final"
                            element={<CharacterSheetPage loadCharacterData={loadCharacterData} />}
                        />
                        <Route
                            path="/user"
                            element={<UsersPage setLoadCharacterData={setLoadCharacterData} />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
