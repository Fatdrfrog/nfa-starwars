import { useEffect, useState } from "react";
import axios from "axios";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  //https://swapi.dev/api/planets
  //https://starwars-visualguide.com/assets/img/planets/2.jpg

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((res) => {
      if (res) {
        setPlanets(res.data.results);
      }
    });
  }, []);

  return (
    <div className="item-list-layout">
      {planets.map((planet, index) => (
        <div key={planet.name}>
          <div>
            <p>name: {planet.name}</p>
            <p>gravity: {planet.gravity}</p>
            <p>diameter: {planet.diameter}</p>
          </div>
          <div className="item-image-layout">
            <img
              className="item-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${
                index + 1
              }.jpg`}
              alt="planet"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
