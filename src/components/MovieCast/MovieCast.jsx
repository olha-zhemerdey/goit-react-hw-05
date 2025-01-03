import { useEffect, useState } from "react";
import { getCastMovie } from "../../services/api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import CastList from "../CastList/CastList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieCast = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchCastMovie = async () => {
      try {
        const data = await getCastMovie(movieId);
        setDataMovie(data);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      {dataMovie && <CastList dataMovie={dataMovie} />}
    </>
  );
};

export default MovieCast;
