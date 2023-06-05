import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GalleryCharacterDetail.css";
const GalleryEpisodeDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const getCharacter = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
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
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender:{character.gender}</h3>
        <h3>{character.origin.name}</h3>
        <h3>{character.location.name}</h3>
        <figcaption>{character.description}</figcaption>
      </figure>
    </main>
  );
};
export default GalleryEpisodeDetail;
