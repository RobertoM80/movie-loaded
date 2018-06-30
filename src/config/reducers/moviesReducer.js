import { FETCH_BEST_MOVIES_2018, FETCH_HIGHEST_RATED_MOVIES, FETCH_MOST_POPULAR_MOVIES, FETCH_YOUTUBE_MOVIE } from "../actions/types";

const initializeState = {
    best_movies_2018: [],
    highest_rated_movies: [],
    most_popular_movies: [],
    current_youtube_trailer_movie_id: '',
    current_youtube_trailer_movie_title: ''
}

const moviesReducer = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_BEST_MOVIES_2018:
            return {
                ...state,
                best_movies_2018: action.payload.best_movies_2018
            };
        case FETCH_HIGHEST_RATED_MOVIES:
            return {
                ...state,
                highest_rated_movies: action.payload.highest_rated_movies
            };
        case FETCH_MOST_POPULAR_MOVIES:
            return {
                ...state,
                most_popular_movies: action.payload.most_popular_movies
            };
        case FETCH_YOUTUBE_MOVIE:
            return {
                ...state,
                current_youtube_trailer_movie_id: action.payload.current_youtube_trailer_movie_id,
                current_youtube_trailer_movie_title: action.payload.current_youtube_trailer_movie_title
            };

        default:
            return state;
    }
}

export default moviesReducer;