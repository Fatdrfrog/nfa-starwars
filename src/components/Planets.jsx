import axios from "axios";
import { useEffect } from "react";
export const Planets = () => {
  //https://swapi.dev/api/planets
  //https://starwars-visualguide.com/assets/img/planets/2.jpg
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets");
  }, []);

  return (
    <div className="item-list-layout">
      <div>
        <p>gravity: Planet Gravity</p>
        <p>diameter: Planet Diameter</p>
      </div>
      <div className="item-image-layout">
        <img
          className="item-image"
          src={"https://starwars-visualguide.com/assets/img/planets/2.jpg"}
          alt="planet"
        />
      </div>
    </div>
  );
};
