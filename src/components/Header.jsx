import StarWarsLogoSVG from "../assets/star-wars.svg";
import IconSearchSVG from "../assets/icon-search.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="links-layout"></div>
      <img src={StarWarsLogoSVG} />
      <div className="search-layout">
        <img src={IconSearchSVG} className="search-icon" />

        <input placeholder="Search Star Wars" type="text" />
      </div>
    </header>
  );
};
