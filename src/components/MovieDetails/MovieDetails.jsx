const MovieDetails = ({ data }) => {
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
        alt={data.original_title}
      />
      <div>
        <h2>{data.original_title}</h2>
        <p>Vote average: {data.vote_average.toFixed(1)}/10</p>
        <div>
          <h3>Overview</h3>
          <p>{data.overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <ul>
            {data.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
