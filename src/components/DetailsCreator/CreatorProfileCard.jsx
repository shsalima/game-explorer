import "../../style/style.css";

export default function CreatorProfileCard() {
  const creator = {
    name: "Hideo Kojima",
    image:
      "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwYXZhdGFyfGVufDB8fDB8fHww",
    roles: ["Director", "Writer", "Producer"],
    stats: {
      games: 32,
      rating: 9.1,
      since: 1987,
    },
  };

  return (
    <div className="creator-card">
      <div className="creator-image rounded-md overflow-hidden">
        <img src={creator.image} alt={creator.name} className="creator-image" />
      </div>
      <div style={{ padding: "15px" }}>
        <h2 className="name">{creator.name}</h2>

        <div className="roles">
          {creator.roles.map((role, index) => (
            <span key={index} className="">
              {role} ·
            </span>
          ))}
        </div>

        <div className="stats">
          <div>
            <strong className="num">{creator.stats.games}</strong>
            <p className="title">Games</p>
          </div>

          <div>
            <strong className="num">{creator.stats.rating}</strong>
            <p className="title">Avg Score</p>
          </div>

          <div>
            <strong className="num">{creator.stats.since}</strong>
            <p className="title">Since</p>
          </div>
        </div>
        <div className="creator-info">
          <span>Director</span>
          <span>Writer</span>
          <span>Designer</span>
        </div>
      </div>
    </div>
  );
}
