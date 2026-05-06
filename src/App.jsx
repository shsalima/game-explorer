import "./App.css";
import AppHeader from "./components/layout/AppHeader";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
            </Routes>
        </>
    );
}

export default App;
