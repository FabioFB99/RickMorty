import { useState, useEffect } from "react";
import "./GalleryLocations.css";
import axios from "axios";
import MainGallery from "../layout/MainGallery";
import Loading from "../components/Loading";
import LocationPortrait from "../components/LocationPortrait";
const GalleryLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const getLocations = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/location");
    const data = res.data;
    //console.log(data);
    setLocations(data.results);
    setLoaded(true);
  };
  useEffect(() => {
    getLocations();
  });
  return (
    <main className="sw-section-gallery">
      <h2>Locations</h2>
      <MainGallery>
        {loaded ? (
          locations.map((location) => (
            <LocationPortrait location={location} key={location.id} />
          ))
        ) : (
          <Loading />
        )}
      </MainGallery>
    </main>
  );
};

export default GalleryLocations;
