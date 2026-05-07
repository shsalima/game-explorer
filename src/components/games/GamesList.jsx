import GameCard from "./GameCard";

export default function GamesList({ games }) {
    let gamesList = games.map((game) => <GameCard key={game.id} game={game} />);
    return (
        <section className="py-10">
            <div className="grid grid-cols-12 justify-center items-start gap-8">
                {gamesList}
            </div>
        </section>
    );
}
