import { useEffect, useState } from "react";
import { fetchReviewsMovie } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import MovieReviewsList from "../MovieReviewList/MovieReviewList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const handleReviewsMovie = async () => {
      try {
        const data = await fetchReviewsMovie(movieId);
        setDataMovie(data.results);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    handleReviewsMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      {dataMovie.length ? (
        <MovieReviewsList results={dataMovie} />
      ) : (
        <p className={css.noReviewMessage}>
          There are no reviews for this movie
        </p>
      )}
    </>
  );
};

export default MovieReviews;
