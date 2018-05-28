import { IS_LOADING_WEATHER } from '../actions/types';

const initialState = {
    isLoadingWeather: true
}

const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING_WEATHER:
            return {
                ...state,
                isLoadingWeather: action.payload
            }

        default:
            return state;
    }
}

export default isLoadingReducer;