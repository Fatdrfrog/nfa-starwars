import { useEffect, useState } from "react";
import axios from "axios";

export const Character = () => {
  const [character, setCharacter] = useState([]);

  console.log("characters");
  //https://swapi.dev/api/people
  //https://starwars-visualguide.com/assets/img/characters/2.jpg

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((res) => {
      if (res) {
        setCharacter(res.data.results);
      }
    });
  }, []);

  return (
    <div className="item-list-layout">
      <div>
        <div>
          <p>name: {character.name}</p>
          <p>gender: {character.gender}</p>
          <p>birthday: {character.birth_year}</p>
        </div>
        <div className="item-image-layout">
          <img
            className="item-image"
            src={`https://starwars-visualguide.com/assets/img/characters/asd.jpg`}
            alt="planet"
          />
        </div>
      </div>
    </div>
  );
};
