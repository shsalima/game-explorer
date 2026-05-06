import axios from "axios";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function GamesList() {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
    const [games, setGames] = useState(null);

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games?key=${VITE_API_KEY}&page_size=10`)
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let gamesList = [];
    if (games) {
        gamesList = games.map((game) => <GameCard key={game.id} game={game} />);
    }
    return (
        <section className="py-10">
            <div className="grid grid-cols-12 justify-center items-start gap-8">
                {games && gamesList}
            </div>
        </section>
    );
}
