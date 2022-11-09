import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PlaybookPage from "./pages/PlaybookPage/PlaybookPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
    const [sendState, setSendState] = useState(0);
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/character" element={<PlaybookPage sendState={sendState} />} />
                        <Route path="/user" element={<UsersPage setSendState={setSendState} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
