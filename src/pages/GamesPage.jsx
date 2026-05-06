import SectionTitle from "../components/global/SectionTitle";
import GamesList from "../components/games/GamesList";

export default function GamesPage() {
    return (
        <div className="bg-[#080b10] py-10">
            <div className="container">
                <SectionTitle category={"Explore"} title={"All Games"} />
                <p className="text-white">
                    Discover 500,000+ games across all platforms and genres
                </p>
                <GamesList />
            </div>
        </div>
    );
}
