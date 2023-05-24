import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GalleryCharacterDetail.css";
const GalleryDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const getCharacter = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = res.data;
    console.log(data);
    setCharacter(data);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <main>
      <figure className="sw-section-detail">
        <img
          src={character.image}
          alt={character.name}
          referrerPolicy="no-referrer"
        />
        <h3>{character.name}</h3>
        <figcaption>{character.description}</figcaption>
      </figure>
    </main>
  );
};
export default GalleryDetail;
