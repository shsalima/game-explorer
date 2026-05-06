import HomeHero from "../components/home/HomeHero";
import TrendingGames from "../components/home/TrendingGames";

export default function HomePage() {
    return (
        <div className="bg-[#080b10]">
            <div className="container">
                <HomeHero />
                <TrendingGames />
            </div>
        </div>
    );
}
