import "../../style/style.css";

export default function CreatorProfileCard({ creator }) {
    return (
        <div className="creator-card">
            <div className="creator-image rounded-md overflow-hidden">
                <img
                    src={creator.image}
                    alt={creator.name}
                    className="creator-image"
                />
            </div>
            <div style={{ padding: "15px" }}>
                <h2 className="name">{creator.name}</h2>

                <div className="stats">
                    <div>
                        <strong className="num">{creator.games_count}</strong>
                        <p className="title">Games</p>
                    </div>

                    <div>
                        <strong className="num">{creator.rating}</strong>
                        <p className="title">Avg Score</p>
                    </div>

                    <div>
                        <strong className="num">
                            {creator.timeline[0].year}
                        </strong>
                        <p className="title">Since</p>
                    </div>
                </div>
                <div className="creator-info">
                    {creator.positions.map((position, index) => (
                        <span key={index} className="">
                            {position.name}
                        </span>
                    ))}
                    {/* <span>Director</span>
          <span>Writer</span>
          <span>Designer</span> */}
                </div>
            </div>
        </div>
    );
}
