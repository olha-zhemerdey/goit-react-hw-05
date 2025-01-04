import { Link, useLocation } from "react-router-dom";

const MovieItem = ({ data }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${data.id}`} state={location}>
        {data.original_title}
      </Link>
    </li>
  );
};

export default MovieItem;
