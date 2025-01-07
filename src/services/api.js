import axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1OTA4ZGIxNjhkOWI5ZmU2OGQ0YzJmNWM2ZDI2ZiIsIm5iZiI6MTczNTU1OTgwNi44ODQsInN1YiI6IjY3NzI4YTdlZTljYWMwN2VjNDEyYjNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ksid5ZBydevyBHDPjgvmZKsbAHqtAknaEI57knRnYhY";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};

const API_PATH = {
  trend: "/trending/movie/day?",
  movie: "/movie/",
  search: "/search/movie",
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get(API_PATH.trend, {});
  return response.data;
};

export const fetchSearchMovies = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const fetchDetailsMovie = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "?");
  return response.data;
};

export const fetchCastMovie = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?");
  return response.data;
};

export const fetchReviewsMovie = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?");
  return response.data;
};
