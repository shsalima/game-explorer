import "./App.css";
import AppHeader from "./components/layout/AppHeader";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatorDetailsPage from "./pages/CreatorDetailsPage";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<CreatorDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
