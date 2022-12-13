import { useEffect, useState } from "react";
import axios from "axios";

export const Characters = () => {
  const [peoples, setPeoples] = useState([]);

  //https://swapi.dev/api/people
  //https://starwars-visualguide.com/assets/img/characters/2.jpg

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((res) => {
      if (res) {
        setPeoples(res.data.results);
      }
    });
  }, []);

  return (
    <div className="item-list-layout">
      {peoples.map((people, index) => (
        <div key={people.name}>
          <div>
            <p>name: {people.name}</p>
            <p>gender: {people.gender}</p>
            <p>birthday: {people.birth_year}</p>
          </div>
          <div className="item-image-layout">
            <img
              className="item-image"
              src={`https://starwars-visualguide.com/assets/img/characters/${
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
