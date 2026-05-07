import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import GameCard from "../games/GameCard";

export default function GamesSimilair({ gameId, gameGenre }) {
  const [similarGames, setSimilarGames] = useState([]);

  const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const similarRes = await axios.get(
          `${VITE_API_URL}/games?key=${VITE_API_KEY}&genres=${gameGenre}&page_size=3&exclude=${gameId}`,
        );
        console.log(
          `${VITE_API_URL}/games?key=${VITE_API_KEY}&genres=${gameGenre}&page_size=3&exclude=${gameId}`,
        );
        setSimilarGames(similarRes.data.results);
        console.log("6666666666", similarGames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameDetails();
  }, [gameId]);

  if (!similarGames.length) {
    return <div className="p-10">Game not found or loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b121c] text-white font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <section className="mt-12">
          <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-3 mb-6 uppercase italic">
            Similar Games
          </h2>
          <div className="grid grid-cols-12 justify-center items-start gap-8">
            {similarGames.map((sGame) => (
              <GameCard game={sGame} key={sGame.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
