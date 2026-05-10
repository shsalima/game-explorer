import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../global/SectionTitle";
import GameCard from "../games/GameCard";
import { Link } from "react-router";
import FailError from "../global/FailError";

export default function TrendingGames() {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
    const [loading, setLoading] = useState(true);
    const [trendingGames, setTrendingGames] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games?key=${VITE_API_KEY}&page_size=6`)
            .then((res) => {
                setTrendingGames(res.data.results);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading my-10">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <FailError />;
    }

    let trendingGamesList = trendingGames.map((game) => (
        <GameCard key={game.id} game={game} />
    ));
    return (
        <section className="py-10">
            <SectionTitle category={"Hot Right Now"} title={"Trending Games"} />
            <div className="grid grid-cols-12 justify-center items-start gap-8">
                {trendingGamesList}
            </div>
            <Link
                to="/games"
                className="block w-fit bg-[linear-gradient(to_right,#2563eb,#1a3a8f)] text-white text-center font-bold px-4 py-3 mt-10 mx-auto rounded-md cursor-pointer"
            >
                Browse More Games
            </Link>
        </section>
    );
}
