import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img
            className="rymlogo"
            src="https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/logoburnedinleft?size=600x181&format=png&partner=hbomaxcom&host=art-gallery.api.hbo.com&language=es-es&w=600"
            alt="Rick & Morty Logo"
          />
        </NavLink>

        <ul>
          <li>
            <NavLink to="/gallerycharacters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/gallerylocations">Locations</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
