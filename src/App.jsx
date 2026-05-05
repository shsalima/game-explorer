import "./App.css";
import AppHeader from "./components/layout/AppHeader";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
