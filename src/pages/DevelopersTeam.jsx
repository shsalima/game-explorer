import { useEffect, useState } from "react";
import { useParams } from "react-router";

import RenderTeamCard from "../components/developer-details/RenderTeamCard";
import SectionTitle from "../components/global/SectionTitle";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function DevelopersTeam() {
  const { gameId } = useParams();

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/games/${gameId}/development-team?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setTeam(data.results);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [gameId]);

  if (loading) {
    return (
      <div className="loading my-10">
        <div className="loader"></div>
      </div>
    );
  }

  console.log(team);

  return (
    <div className="text-white">
      <div className="container">
        <SectionTitle category="Game" title="Developer Team" />
        <p className="mb-6">
          FromSoftware — the legendary studio behind the Souls series
        </p>
        <div className="grid grid-cols-15 gap-5">
          {team.map((dev) => (
            <RenderTeamCard key={dev.id} dev={dev} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopersTeam;
