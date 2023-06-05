import { useState, useEffect } from "react";
import "./GalleryLocations.css";
import axios from "axios";
import MainGallery from "../layout/MainGallery";
import Loading from "../components/Loading";
import EpisodePortrait from "../components/EpisodePortrait";
const GalleryEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const getEpisodes = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/episode");
    const data = res.data;
    console.log(data);
    setEpisodes(data.results);
    setLoaded(true);
  };
  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <main className="sw-section-episodes">
      <h2>Episodes</h2>
      <MainGallery>
        {loaded ? (
          episodes.map((episode) => (
            <EpisodePortrait episode={episode} key={episode.id} />
          ))
        ) : (
          <Loading />
        )}
      </MainGallery>
    </main>
  );
};

export default GalleryEpisodes;
