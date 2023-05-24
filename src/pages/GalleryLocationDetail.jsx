import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./GalleryLocationDetail.css";
import axios from "axios";
const GalleryLocationDetail = () => {
  const [location, setLocation] = useState({});
  const [totalresindents, setTotalresidents] = useState(0);
  const { id } = useParams();
  const getLocation = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    const data = res.data;
    setLocation(data);

    setTotalresidents(data.residents.length);
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <main>
      <div className="sw-section-detail">
        <h1>{location.name}</h1>
        <h2> Tipo: {location.type}</h2>
        <h2>{location.dimension}</h2>
        <h2>{location.created}</h2>
        <h2>Numero de Habitantes: {totalresindents}</h2>
      </div>
    </main>
  );
};
export default GalleryLocationDetail;
