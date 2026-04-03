const Card = ({ name, player, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Famous Player: {player}</p>
    </div>
  );
};

export default Card;