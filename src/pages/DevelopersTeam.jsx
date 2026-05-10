import { useEffect, useState } from "react";
import { useParams } from "react-router";

import RenderTeamCard from "../components/developer-details/RenderTeamCard";
import RenderHeader from "../components/developer-details/DevelopersHeader";

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
                console.log("FULL DATA:", data);

                const teamData = Array.isArray(data)
                    ? data
                    : data?.results || [];

                setTeam(teamData);
                setLoading(false);
            })
            .catch((error) => {
                console.log("ERROR:", error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(true);
            });
    }, [gameId]);

    return (
        <div>
            <RenderHeader />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="cards">
                    {team.map((dev, index) => (
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
