export const Characters = () => {
  //https://swapi.dev/api/people
  //https://starwars-visualguide.com/assets/img/people/2.jpg

  return (
    <div className="item-list-layout">
      <div>
        <p>name: ...</p>
        <p>gender: ...</p>
        <p>birthday: ...</p>
      </div>
      <div className="item-image-layout">
        <img className="item-image" src={"src"} alt="character" />
      </div>
    </div>
  );
};
