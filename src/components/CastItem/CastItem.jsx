const CastItem = ({ data: { character, name, profile_path } }) => {
  return (
    <li>
      <img src={"https://image.tmdb.org/t/p/w200" + profile_path} alt={name} />
      <p>{name}</p>
      {character && <p>Character: {character}</p>}
    </li>
  );
};

export default CastItem;
