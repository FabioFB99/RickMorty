import "./LocationPortrait.css";
import { Link } from "react-router-dom";
const EpisodePortrait = ({ episode }) => {
  return (
    <Link className="sw-portrait" to={`/galleryepisodes/${episode.id}`}>
      <h3>{episode.name}</h3>
      <h3>Episode: {episode.episode}</h3>
    </Link>
  );
};
export default EpisodePortrait;
