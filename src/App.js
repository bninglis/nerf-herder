import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlaybookPage from "./pages/PlaybookPage/PlaybookPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="page-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new" element={<PlaybookPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
