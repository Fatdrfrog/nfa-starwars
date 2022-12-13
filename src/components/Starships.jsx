import { useEffect, useState } from "react";
import axios from "axios";

export const Starships = () => {
  const [starships, setStarships] = useState([]);

  //https://swapi.dev/api/people
  //https://starwars-visualguide.com/assets/img/characters/2.jpg

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships").then((res) => {
      if (res) {
        setStarships(res.data.results);
      }
    });
  }, []);

  return (
    <div className="item-list-layout">
      {starships.map((starships, index) => (
        <div key={starships.model}>
          <div>
            <p>length: {starships.length}</p>
            <p>model: {starships.model}</p>
            <p>passengers: {starships.passengers}</p>
            <p>cost_in_credits: {starships.cost_in_credits}</p>
          </div>
          <div className="item-image-layout">
            <img
              className="item-image"
              src={`https://starwars-visualguide.com/assets/img/starships/${
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

{
  /* <p>length: ...</p>
<p>model: ...</p>
<p>passengers: ...</p>
<p>cost_in_credits: ...</p> */
}
