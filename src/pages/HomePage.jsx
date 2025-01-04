import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import { Title } from "../components/Title/Title";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      <Title title={"Trending today"} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
