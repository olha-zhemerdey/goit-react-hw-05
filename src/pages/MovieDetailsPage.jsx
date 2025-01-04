import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../services/api";
import Loader from "../components/Loader/Loader";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import GoBack from "../components/GoBack/GoBack";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchDetailsMovie = async () => {
      try {
        const data = await getDetailsMovie(movieId);
        setDataMovie(data);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchDetailsMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      <GoBack />
      {dataMovie && <MovieDetails data={dataMovie} />}
      <AdditionalInfo />
    </>
  );
};

export default MovieDetailsPage;
