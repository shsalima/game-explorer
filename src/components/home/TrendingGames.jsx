import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../global/SectionTitle";
import GameCard from "../games/GameCard";

export default function TrendingGames() {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
    const [trendingGames, setTrendingGames] = useState(null);

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games?key=${VITE_API_KEY}&page_size=6`)
            .then((res) => {
                setTrendingGames(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let trendingGamesList = [];
    if (trendingGames) {
        trendingGamesList = trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
        ));
    }
    return (
        <section className="py-10">
            <SectionTitle category={"Hot Right Now"} title={"Trending Games"} />
            <div className="grid grid-cols-12 gap-5">
                {trendingGames && trendingGamesList}
            </div>
        </section>
    );
}
