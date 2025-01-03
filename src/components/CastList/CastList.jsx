import CastItem from "../CastItem/CastItem";

const CastList = ({ dataMovie: { cast } }) => {
  return (
    <ul>
      {cast.map((data) => (
        <CastItem key={data.id} data={data} />
      ))}
    </ul>
  );
};

export default CastList;
