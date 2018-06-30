import { IS_LOADING_WEATHER, IS_LOADING_CHUCK, IS_LOADING_MOVIE } from '../actions/types';

const initialState = {
    isLoadingWeather: false,
    isLoadingChuck: false,
    isLoadingMovie: false
}

const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING_WEATHER:
            return {
                ...state,
                isLoadingWeather: action.payload
            }
        case IS_LOADING_CHUCK:
            return {
                ...state,
                isLoadingChuck: action.payload
            }
        case IS_LOADING_MOVIE:
            return {
                ...state,
                isLoadingMovie: action.payload
            }

        default:
            return state;
    }
}

export default isLoadingReducer;