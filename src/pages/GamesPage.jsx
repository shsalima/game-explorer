import { useState } from "react";
import SectionTitle from "../components/global/SectionTitle";
import GamesList from "../components/games/GamesList";
import FilterSection from "../components/games/FilterSection";

export default function GamesPage() {
    const [games, setGames] = useState(null);

    return (
        <div className="bg-[#080b10] min-h-[calc(100vh-68px)] py-10">
            <div className="container">
                <SectionTitle category={"Explore"} title={"All Games"} />
                <p className="text-white">
                    Discover 500,000+ games across all platforms and genres
                </p>
                <FilterSection setGames={setGames} />
                {games ? (
                    <GamesList games={games} />
                ) : (
                    <div className="loading my-10">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </div>
    );
}
