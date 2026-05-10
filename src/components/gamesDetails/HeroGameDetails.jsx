import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import GamesSimilair from "./GamesSimilair";
import FailError from "../global/FailError";

export default function HeroGameDetails() {
  const { gameId } = useParams();
  // console.log(gameId);
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

  useEffect(() => {
    const fectGameDetals = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/games/${gameId}?key=${VITE_API_KEY}`,
        );
       
        setGame(response.data);
        setLoading(false);
      } catch (error) {
         console.log(error);
         setError(true);
        setLoading(false);
      }
    };
    fectGameDetals();
  }, [gameId]);

  // console.log(game);

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
    <div className="min-h-screen bg-[#0b121c] text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <Link to="/games" className="text-blue-400 text-sm mb-6 inline-block">
            ← BACK TO GAMES
          </Link>
        </div>

        <div className="relative h-[400px] overflow-hidden mb-8">
          <img
            src={game.background_image}
            className="w-full h-full"
            alt={game.name}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-black uppercase italic">
              {game.name}
            </h1>
          </div>
          <div className="absolute bottom-8 right-8 bg-[#0f1926]/90 p-4 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400">
              {game.rating}
            </div>
            <div className="text-[10px] uppercase text-gray-400">
              User Score
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-3 mb-4 uppercase italic">
              About
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {game.description_raw || "No description available."}
            </p>
          </div>

          <aside className="bg-[#151f2e] p-6 rounded-2xl border border-gray-800 h-fit">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500 text-xs uppercase font-bold">
                  Released
                </span>
                <span className="text-sm">{game.released}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-500 text-xs uppercase font-bold">
                  Metacritic
                </span>
                <span className="text-green-400 font-bold">
                  {game.metacritic || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-gray-500 text-xs uppercase font-bold block mb-2">
                  Platforms
                </span>
                <div className="flex flex-wrap gap-2">
                  {game.platforms?.map((p, index) => (
                    <span
                      key={index}
                      className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded text-[10px] border border-blue-500/20"
                    >
                      {p.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <GamesSimilair gameId={game.id} gameGenre={game.genres[0].slug}/>
      <div className="container pb-6">
          <Link 
            to={`/games/${game.id}/developers-team`} 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-widest text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            View Developer Team
          </Link>
        </div>
    </div>
  );
}
