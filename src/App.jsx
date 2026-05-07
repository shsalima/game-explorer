import "./App.css";
import AppHeader from "./components/layout/AppHeader";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GamesDetailsPage from "./pages/GamesDeatilsPage";
import CreatorsPage from "./pages/CreatorsPage";

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/games/:gameId" element={<GamesDetailsPage/>}/>
                <Route path="/creators" element={<CreatorsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
