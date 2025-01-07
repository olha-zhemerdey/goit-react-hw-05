import { useEffect, useState } from "react";
import { fetchCastMovie } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import CastList from "../CastList/CastList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const handleCastMovie = async () => {
      try {
        const data = await fetchCastMovie(movieId);
        setDataMovie(data);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    handleCastMovie();
  }, [movieId]);

  const hasNoCast =
    dataMovie && (!dataMovie.cast || dataMovie.cast.length === 0);

  return (
    <>
      {loader && <Loader />}
      {isError && <ErrorMessage />}
      {hasNoCast && (
        <p className={css.noCastMessage}>
          Unfortunately, there are no cast for this movie.
        </p>
      )}
      {dataMovie && dataMovie.cast && dataMovie.cast.length > 0 && (
        <CastList dataMovie={dataMovie} />
      )}
    </>
  );
};

export default MovieCast;
