import "../../style/style.css";

export default function CreatorProfileCard({ creator }) {
  // const creator = {
  //   name: "Hideo Kojima",
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwYXZhdGFyfGVufDB8fDB8fHww",
  //   roles: ["Director", "Writer", "Producer"],
  //   stats: {
  //     games: 32,
  //     rating: 9.1,
  //     since: 1987,
  //   },
  // };
  // console.log("tetetee", creator);
  return (
    <div className="creator-card">
      <div className="creator-image rounded-md overflow-hidden">
        <img src={creator.image} alt={creator.name} className="creator-image" />
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
            <strong className="num">{creator.timeline[0].year}</strong>
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
