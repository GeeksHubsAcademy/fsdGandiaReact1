export const VideogameCard = ({nombre, image, plataforma}) => {
  return (
    <div
      className="videogameDesign"
      onClick={() => console.log(nombre)}
    >
      <div>{nombre}</div>
      <div>
        <img className="avatarGame" src={image} alt={nombre} />
      </div>
      <div>{plataforma}</div>
    </div>
  );
};
