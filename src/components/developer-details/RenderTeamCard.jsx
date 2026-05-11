import "../../styles/CardDevelopers.css";

function RenderTeamCard({ dev }) {
  const roles = dev.positions.map((position) => position.name);

  return (
    <div className="card max-md:col-span-7 md:col-span-5 lg:col-span-3">
      <img src={dev.image} alt={dev.name} />
      <h3>{dev.name}</h3>
      <p>{roles.join(", ")}</p>
    </div>
  );
}
export default RenderTeamCard;
