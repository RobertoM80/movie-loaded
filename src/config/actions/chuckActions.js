import { FETCH_CHUCK } from './types';
import axios from 'axios';

export const fetch_chuck = () => dispatch => {
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => response.data)
        .then(joke => dispatch({
            type: FETCH_CHUCK,
            payload: {
                value: joke.value,
                image: joke.icon_url
            }
        }))
}