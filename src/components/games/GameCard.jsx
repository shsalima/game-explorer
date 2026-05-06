export default function TrendingGames({ game }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <img src={game.background_image} alt={game.title} />
        </div>
    );
}
