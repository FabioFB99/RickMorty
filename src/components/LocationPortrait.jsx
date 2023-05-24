import "./LocationPortrait.css";
import { Link } from "react-router-dom";
const LocationPortrait = ({ location }) => {
  return (
    <Link className="sw-portrait" to={`/gallerylocations/${location.id}`}>
      <h3>{location.name}</h3>
      <h3>Type: {location.type}</h3>
      <h3>{location.dimension}</h3>
    </Link>
  );
};
export default LocationPortrait;
