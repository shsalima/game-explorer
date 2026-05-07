import CreatorAbout from "../components/DetailsCreator/CreatorAbout";
import CreatorProfileCard from "../components/DetailsCreator/CreatorProfileCard";
export default function CreatorDetailsPage() {
  return (
    <div className="creator-detail-layout">
      <CreatorProfileCard />
      <CreatorAbout />
    </div>
  );
}
