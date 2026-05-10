import { useState } from "react";
import SectionTitle from "../components/global/SectionTitle";
import GamesList from "../components/games/GamesList";
import FilterSection from "../components/games/FilterSection";
import GamesPagination from "../components/games/GamesPagination";

export default function GamesPage() {
    const [loading, setLoading] = useState(true);
    const [gamesData, setGamesData] = useState({ games: null, totalPages: 1 });
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="bg-[#080b10] min-h-[calc(100vh-68px)] py-10">
            <div className="container">
                <SectionTitle category={"Explore"} title={"All Games"} />
                <p className="text-white">
                    Discover 500,000+ games across all platforms and genres
                </p>
                <FilterSection
                    setGamesData={setGamesData}
                    setLoading={setLoading}
                    setError={setError}
                    currentPage={currentPage}
                />
                <GamesList
                    games={gamesData.games}
                    loading={loading}
                    error={error}
                />
                {gamesData.games && (
                    <GamesPagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={gamesData.totalPages}
                    />
                )}
            </div>
        </div>
    );
}
