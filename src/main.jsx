import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GalleryCharacters from "./pages/GalleryCharacters";
import GalleryCharactersDetail from "./pages/GalleryCharacterDetail";
import GalleryLocations from "./pages/GalleryLocations";
import GalleryLocationDetail from "./pages/GalleryLocationDetail";
import GalleryEpisodes from "./pages/GalleryEpisodes";
import "./index.css";
import GalleryEpisodesDetail from "./pages/GalleryEpisodeDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="gallerycharacters" element={<GalleryCharacters />} />
          <Route
            path="/gallerycharacters/:id"
            element={<GalleryCharactersDetail />}
          />
          <Route
            path="/gallerylocations/:id"
            element={<GalleryLocationDetail />}
          />
          <Route
            path="/galleryepisodes/:id"
            element={<GalleryEpisodesDetail />}
          />
          <Route path="gallerylocations" element={<GalleryLocations />} />
          <Route path="galleryepisodes" element={<GalleryEpisodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
