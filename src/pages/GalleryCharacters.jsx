import { useState, useEffect } from "react";
import "./GalleryCharacters.css";
import axios from "axios";
import CharacterPortrait from "../components/CharacterPortrait";
import Loading from "../components/Loading";
import MainGallery from "../layout/MainGallery";
const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setpage] = useState("https://rickandmortyapi.com/api/character");
  const getCharacters = async () => {
    const res = await axios.get(page); /* pillo personajes */
    const data = res.data;
    //console.log(data);
    setCharacters(data.results); /* para meterlos en el array */
    setLoaded(true); /*  para saber que lo hemos cargado */
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <main className="sw-section-gallery">
      <h2>Gallery of Characters</h2>
      <MainGallery>
        {loaded ? (
          characters.map((character) => (
            <CharacterPortrait character={character} key={character.id} />
          ))
        ) : (
          <Loading />
        )}
      </MainGallery>
    </main>
  );
};
export default Gallery;
