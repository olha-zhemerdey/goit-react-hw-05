import { useEffect, useState } from "react";
import { getReviewsMovie } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import MovieReviewsList from "../MovieReviewList/MovieReviewList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchReviewsMovie = async () => {
      try {
        const data = await getReviewsMovie(movieId);
        setDataMovie(data.results);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      {dataMovie.length ? (
        <MovieReviewsList results={dataMovie} />
      ) : (
        <p>There are no reviews for this movie</p>
      )}
    </>
  );
};

export default MovieReviews;
