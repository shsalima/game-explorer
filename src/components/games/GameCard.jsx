import { Link } from "react-router";
import { RiStarFill } from "@remixicon/react";

export default function TrendingGames({ game }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={`/games/${game.id}`}>
                <div className="bg-[#0E1628] max-w-[350px] mx-auto border border-[#2563eb9c] rounded-md overflow-hidden hover:translate-y-[-10px] main-transition">
                    <img
                        src={game.background_image}
                        alt={game.name}
                        className="w-full max-h-[165px]"
                    />
                    <div className="p-4">
                        <h3 className="text-white font-bold">{game.name}</h3>
                        <div className="flex items-center gap-1 text-base font-bold">
                            <RiStarFill className="w-[15px] text-[#fbbf24]" />
                            <span className="text-[#38bdf8]">
                                {game.rating}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
