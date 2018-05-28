import { FETCH_BEST_MOVIES_2018 } from './types';
import axios from 'axios';

const base_url = 'https://api.themoviedb.org/3/';
const tmdb_api_key = '&api_key=96e63474e758f0f3c342b883c6991953';
const best_2018 = 'discover/movie?primary_release_year=2018&sort_by=vote_average.desc';

export const fetch_movie = () => dispatch => {
    axios.get(base_url + best_2018 + tmdb_api_key)
        .then(response => console.log(response.data))
        .then(result => dispatch({
            type: FETCH_BEST_MOVIES_2018,
            payload: {
                best_movies_2018: result
            }
        }))
}