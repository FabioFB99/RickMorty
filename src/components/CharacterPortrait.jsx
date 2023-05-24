import "./CharacterPortrait.css";
import { Link } from "react-router-dom";
const CharacterPortrait = ({ character }) => {
  return (
    <Link className="sw-portrait" to={`/gallerycharacters/${character.id}`}>
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
};
export default CharacterPortrait;
