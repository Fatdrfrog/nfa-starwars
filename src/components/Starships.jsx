export const Starships = () => {
  //https://swapi.dev/api/starships
  //https://starwars-visualguide.com/assets/img/starships/2.jpg

  return (
    <div className="item-list-layout">
      <div>
        <p>length: ...</p>
        <p>model: ...</p>
        <p>passengers: ...</p>
        <p>cost_in_credits: ...</p>
      </div>
      <div className="item-image-layout">
        <img className="item-image" src={"src"} alt="starship" />
      </div>
    </div>
  );
};
