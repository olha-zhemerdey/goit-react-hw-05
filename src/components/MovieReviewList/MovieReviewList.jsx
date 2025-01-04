const MovieReviewsList = ({ results }) => {
  return (
    <ul>
      {results.map(({ author, id, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
