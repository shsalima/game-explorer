import axios from "axios";
import { useEffect, useState } from "react";
import HeroGame from "./HeroGame";
import { Link } from "react-router";

export default function HomeHero() {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
    const [heroGame, setHeroGame] = useState(null);

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games/28?key=${VITE_API_KEY}`)
            .then((res) => {
                setHeroGame(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main className="h-[calc(100vh-68px)] flex justify-between items-center">
            <div
                id="content"
                className="lg:w-[48%] text-white max-lg:text-center"
            >
                <h1 className="text-7xl font-bold">
                    EXPLORE <br /> THE <br /> UNIVERSE
                </h1>
                <p>
                    Browse thousands of video games, discover hidden gems,
                    explore detailed game info, and connect with the developers
                    who built them.
                </p>
                <div className="flex max-lg:justify-center gap-3 mt-4">
                    <Link
                        to="/games"
                        className="w-[150px] bg-[linear-gradient(to_right,#2563eb,#1a3a8f)] text-center font-bold py-3 rounded-md cursor-pointer"
                    >
                        Browse Games
                    </Link>
                    <Link
                        to="/creators"
                        className="w-[150px] bg-transparent text-[#8894b0] text-center border border-[#2563eb9c] hover:text-[#2563eb] hover:border-[#2563eb] font-bold py-3 rounded-md cursor-pointer transition"
                    >
                        Meet Creators
                    </Link>
                </div>
            </div>
            <div id="main-game" className="lg:w-[48%] max-lg:hidden">
                {heroGame ? (
                    <HeroGame heroGame={heroGame} />
                ) : (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </main>
    );
}
