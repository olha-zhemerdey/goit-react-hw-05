import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
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
    const handleTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    handleTrendingMovies();
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
