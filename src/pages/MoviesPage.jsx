import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../services/api";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { Title } from "../components/Title/Title";
import ChangingRequest from "../components/ChangingRequest/ChangingRequest";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    const handleSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setIsError(error);
      } finally {
        setLoader(false);
      }
    };
    handleSearchMovies();
  }, [query]);

  const onSubmitForm = (query) => {
    setIsError(false);
    setMovies(null);
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <>
      {loader && <Loader />} {isError && <ErrorMessage />}
      <Title title={"Searching movies"} />
      <SearchForm onSubmitForm={onSubmitForm} />
      {movies && <MovieList movies={movies} />}
      {movies && movies.length === 0 && (
        <ChangingRequest text={"Movies with search criteria isn't found"} />
      )}
    </>
  );
};

export default MoviesPage;
