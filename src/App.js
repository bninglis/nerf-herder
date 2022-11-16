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
    const [characterData, setCharacterData] = useState({ friend: { id: "" }, rival: { id: "" } });
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/playbook/:introToggle"
                            element={
                                <PlaybookPage
                                    characterData={characterData}
                                    setCharacterData={setCharacterData}
                                />
                            }
                        />
                        <Route
                            path="/:id/introform"
                            element={
                                <BlockFormPage
                                    refData={refData}
                                    setRefData={setRefData}
                                    characterData={characterData}
                                    setCharacterData={setCharacterData}
                                />
                            }
                        />
                        <Route
                            path="/idform"
                            element={
                                <GalacticIDFormPage
                                    refData={refData}
                                    characterData={characterData}
                                    setCharacterData={setCharacterData}
                                />
                            }
                        />
                        <Route
                            path="/final"
                            element={
                                <CharacterSheetPage
                                    refData={refData}
                                    characterData={characterData}
                                    setCharacterData={setCharacterData}
                                />
                            }
                        />
                        <Route path="/user" element={<UsersPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
