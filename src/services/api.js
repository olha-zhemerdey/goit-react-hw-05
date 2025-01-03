import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1OTA4ZGIxNjhkOWI5ZmU2OGQ0YzJmNWM2ZDI2ZiIsIm5iZiI6MTczNTU1OTgwNi44ODQsInN1YiI6IjY3NzI4YTdlZTljYWMwN2VjNDEyYjNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ksid5ZBydevyBHDPjgvmZKsbAHqtAknaEI57knRnYhY",
  },
};

export async function getTrendingMovies() {
  try {
    const response = await axios.get("/movie/popular?language=en-US", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSearchMovies(query) {
  try {
    const response = await axios.get(
      `/search/movie?language=en-US&page=1&query=${query}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDetailsMovie(id) {
  try {
    const response = await axios.get(`/movie/${id}?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCastMovie(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviewsMovie(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
