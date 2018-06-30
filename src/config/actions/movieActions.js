import {
    FETCH_BEST_MOVIES_2018,
    FETCH_HIGHEST_RATED_MOVIES,
    FETCH_MOST_POPULAR_MOVIES,
    FETCH_YOUTUBE_MOVIE,
    IS_LOADING_MOVIE
} from './types';
import axios from 'axios';

const base_url_tmdb = 'https://api.themoviedb.org/3/';
const tmdb_api_key = '&api_key=96e63474e758f0f3c342b883c6991953';
const best_2018 = 'discover/movie?primary_release_year=2018&sort_by=vote_average.desc';
const highest_rated = 'discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc';
const most_popular = 'discover/movie?sort_by=popularity.desc';
const configurationUrl = 'https://api.themoviedb.org/3/configuration?api_key=96e63474e758f0f3c342b883c6991953';
const youtube_key = 'AIzaSyB7yWgU5qX43q3t-4wB422S4IB9eOxGLwc';
const base_url_youtube = 'https://www.googleapis.com/youtube/v3/';
export let imageUrlBase;
export let image_sizes;

const configurationData = axios.get(configurationUrl)
    .then(response => response.data)
    .then(result => {
        imageUrlBase = result.images.secure_base_url;
        image_sizes = result.images.poster_sizes;

        console.log('AAAAA', result)
        return result
    })

// configurationData;

export const fetch_movie_best_2018 = () => dispatch => {

    dispatch({ type: IS_LOADING_MOVIE, payload: true })

    axios.get(base_url_tmdb + best_2018 + tmdb_api_key)
        .then(response => response.data.results)
        .then(result => dispatch({
            type: FETCH_BEST_MOVIES_2018,
            payload: {
                best_movies_2018: result
            }
        }))
        .then(() => dispatch({ type: IS_LOADING_MOVIE, payload: false }))

}

export const fetch_movie_highest_rated = () => dispatch => {

    dispatch({ type: IS_LOADING_MOVIE, payload: true })

    axios.get(base_url_tmdb + highest_rated + tmdb_api_key)
        .then(response => response.data.results)
        .then(result => dispatch({
            type: FETCH_HIGHEST_RATED_MOVIES,
            payload: {
                highest_rated_movies: result
            }
        }))
        .then(() => dispatch({ type: IS_LOADING_MOVIE, payload: false }))

}

export const fetch_movie_most_popular = () => dispatch => {

    dispatch({ type: IS_LOADING_MOVIE, payload: true })

    axios.get(base_url_tmdb + most_popular + tmdb_api_key)
        .then(response => response.data.results)
        // .then(result => console.log(result))
        .then(result => dispatch({
            type: FETCH_MOST_POPULAR_MOVIES,
            payload: {
                most_popular_movies: result
            }
        }))
        .then(() => dispatch({ type: IS_LOADING_MOVIE, payload: false }))
        .catch((error) => alert(error))

}

export const fetch_youtube_trailer = (movie_title) => dispatch => {

    dispatch({ type: FETCH_YOUTUBE_MOVIE, payload: true })

    axios.get(`${base_url_youtube}search?q=${movie_title} trailer official&maxResults=25&part=snippet&key=${youtube_key}`)
        // .then(result => console.log('------>', result.data.items[0].id.videoId))
        .then(response => response.data.items[0].id.videoId)
        .then(result => dispatch({
            type: FETCH_YOUTUBE_MOVIE,
            payload: {
                current_youtube_trailer_movie_id: result,
                current_youtube_trailer_movie_title: movie_title
            }
        }))
        .then(() => dispatch({ type: IS_LOADING_MOVIE, payload: false }))
}
