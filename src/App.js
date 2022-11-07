import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlaybookPage from "./pages/PlaybookPage/PlaybookPage";
import UsersPage from "./pages/UsersPage/UsersPage";
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
                        <Route path="/user" element={<UsersPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
