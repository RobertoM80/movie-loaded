import * as types from "./types";
import axios from "axios";
const thisYear = new Date().getFullYear();
const baseUrlTmdb = "https://api.themoviedb.org/3/";
// only for example code don't store api keys in React.
// Not even in env vars. Have a backend instead that do that.
const tmbdKey = "96e63474e758f0f3c342b883c6991953";
const youtubeKey = "AIzaSyDsTb3fhXB01D5yjfjFooWgNnNxDlrjWpo";
const tmdbApiKey = `&api_key=${tmbdKey}`;
const best_2018 = `discover/movie?primary_release_year=${thisYear}&sort_by=vote_average.desc`;
const upcoming = `movie/upcoming?api_key=${tmbdKey}&language=en-US&page=1`;
const highestRated = `movie/top_rated?api_key=${tmbdKey}&language=en-US&page=1`;
const mostPopular = "discover/movie?sort_by=popularity.desc";
const configurationUrl = `https://api.themoviedb.org/3/configuration?api_key=${tmbdKey}`;
const baseUrlYoutube = "https://www.googleapis.com/youtube/v3/";
export let imageUrlBase;
export let imageSizes;

const configurationData = axios
  .get(configurationUrl)
  .then((response) => response.data)
  .then((result) => {
    imageUrlBase = result.images.secure_base_url;
    imageSizes = result.images.poster_sizes;
    return result;
  });

// configurationData;

export const fetchMovies = (type) => async (dispatch) => {
  try {
    const movieUrl = {
      upcoming: upcoming,
      rated: highestRated,
      popular: mostPopular,
    };

    dispatch({ type: types.FETCH_MOVIE_START });
    let movies;
    movies = Object.values(movieUrl).map((url) => {
      return new Promise(async (resolve, reject) => {
        const {
          data: { results: movies },
        } = await axios.get(baseUrlTmdb + url + tmdbApiKey);

        resolve({
          ...movies,
          type: Object.keys(movieUrl).find((k) => movieUrl[k] === url),
        });
      });
    });

    const allMovies = await Promise.allSettled(movies);

    allMovies.map((promise) => {
      const isFullfilled = promise.status === "fulfilled";
      const type = promise.value.type;
      const movies = Object.values(promise.value).filter(
        (value) => typeof value != "string"
      );

      if (isFullfilled) {
        dispatch({
          type: types.FETCH_MOVIE_SUCCESS,
          payload: { type, movies },
        });
      } else {
        dispatch({
          type: types.FETCH_MOVIE_FAILURE,
          payload: { type, error: `Impossible to retreive ${type} movies` },
        });
      }
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.FETCH_MOVIE_FAILURE,
      payload: { type: null, error },
    });
  }
};

export const fetchYoutubeTrailer = (movieTitle) => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_YOUTUBE_MOVIE_START, payload: true });

    const response = await axios.get(
      `${baseUrlYoutube}search?q=${movieTitle} trailer official&maxResults=1&part=snippet&key=${youtubeKey}`
    );

    const { videoId } = response.data.items[0].id;

    dispatch({
      type: types.FETCH_YOUTUBE_MOVIE_SUCCESS,
      payload: {
        currentYoutubeTrailerMovieId: videoId,
        currentYoutubeTrailerMovieTitle: movieTitle,
      },
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_YOUTUBE_MOVIE_FAILURE,
      payload: { type: null, error },
    });
  }
};

export const updateActive = (view) => (dispatch) => {
  dispatch({ type: types.UPDATE_VIEW, payload: { view } });
};
