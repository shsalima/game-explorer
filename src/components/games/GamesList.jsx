import FailError from "../global/FailError";
import GameCard from "./GameCard";

export default function GamesList({ games, loading, error }) {
    if (loading) {
        return (
            <div className="loading my-10">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <FailError />;
    }

    let gamesList = games.map((game) => <GameCard key={game.id} game={game} />);
    return (
        <section className="py-10">
            <div className="grid grid-cols-12 justify-center items-start gap-8">
                {gamesList}
            </div>
        </section>
    );
}
