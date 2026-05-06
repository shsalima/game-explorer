export default function TrendingGames({ game }) {
    console.log(game);

    return (
        <div className="col-span-4">
            <img src={game.background_image} alt={game.title} />
        </div>
    );
}
