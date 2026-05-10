import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../games/GameCard";

export default function CreatorAbout({ creator }) {
  const [games, setGames] = useState([]);

  console.log("about", creator);

  useEffect(() => {
    document.getElementById("creator-des").innerHTML = creator.description;
  }, []);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games?creators=${creator.id}&key=${
            import.meta.env.VITE_API_KEY
          }`,
        );

        setGames(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    if (creator?.id) getGames();
  }, []);

  return (
    <div className="about-container">
      <div className="section-title">About</div>
      <p className="detail-desc" id="creator-des"></p>

      <div className="section-title">Associated Games</div>

      <div className="grid grid-cols-12 justify-center items-start gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
