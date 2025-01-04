import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((data) => (
        <MovieItem key={data.id} data={data} />
      ))}
    </ul>
  );
};

export default MovieList;
