import { RiStarFill } from "@remixicon/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FailError from "../global/FailError";

export default function HeroGame() {
    const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
    const [loading, setLoading] = useState(true);
    const [heroGame, setHeroGame] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`${VITE_API_URL}/games/28?key=${VITE_API_KEY}`)
            .then((res) => {
                setHeroGame(res.data);
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
            <div className="loading">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <FailError />;
    }

    return (
        <div>
            <div
                id="image"
                className="relative border border-[#2563eb9c] rounded-md overflow-hidden before:absolute before:bg-[linear-gradient(to_top,#000_33%,transparent)] before:left-0 before:bottom-0 before:w-full before:h-[50%]"
            >
                <img
                    src={heroGame.background_image}
                    alt={heroGame.name}
                    className="w-full"
                />
                <div id="game-info" className="absolute left-0 bottom-0 p-6">
                    <h2 className="text-white text-2xl font-bold">
                        {heroGame.name}
                    </h2>
                    <div className="flex justify-center items-center w-fit p-1 bg-[#2563eb4d] text-base font-bold border border-[#2563eb80] rounded-md">
                        <RiStarFill className="w-[15px] text-[#fbbf24]" />
                        <span className="text-[#38bdf8]">{`${heroGame.rating} / 5`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
