import StarWarsLogoSVG from "../assets/star-wars.svg";
import IconSearchSVG from "../assets/icon-search.svg";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    // validation
    if (path === "starships") return;
    navigate(path);
  };

  return (
    <header className="header">
      <div className="links-layout"></div>
      <img src={StarWarsLogoSVG} />
      <div className="search-layout">
        <img src={IconSearchSVG} className="search-icon" />

        <input placeholder="Search Star Wars" type="text" />
      </div>
      <button onClick={() => handleNavigate("planets")}>Planets</button>

      <button onClick={() => handleNavigate("starships")}>Starships</button>

      <button onClick={() => handleNavigate("characters")}>Characters</button>
    </header>
  );
};
