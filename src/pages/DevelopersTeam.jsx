import { useEffect, useState } from "react";
import RenderTeamCard from "../components/RenderTeamCard";
import RenderHeader from "../components/RenderHeader";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function DevelopersTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gameId = 3498;

    fetch(`${API_URL}/games/${gameId}/development-team?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 FULL DATA:", data); // 👈 تشوف الرد كامل
        console.log("🎯 RESULTS:", data.results); // 👈 تشوف غير list

        setTeam(data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("❌ ERROR:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <RenderHeader />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards">
          {team.map((dev) => (
            <RenderTeamCard
              key={dev.id}
              name={dev.name}
              role={dev.position}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DevelopersTeam;