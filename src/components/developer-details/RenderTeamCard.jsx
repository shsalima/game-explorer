function RenderTeamCard({name, role}){
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}
export default RenderTeamCard;