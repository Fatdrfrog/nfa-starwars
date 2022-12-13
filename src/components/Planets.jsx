export const Planets = () => {
  //https://swapi.dev/api/planets
  return (
    <div className="item-list-layout">
      <div>
        <p>gravity: Planet Gravity</p>
        <p>diameter: Planet Diameter</p>
      </div>
      <div className="item-image-layout">
        <img className="item-image" src={"src"} alt="planet" />
      </div>
    </div>
  );
};
