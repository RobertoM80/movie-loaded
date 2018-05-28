import { FETCH_WEATHER } from "../actions/types";

const initializeState = {
    temperature: '',
    location: '',
    icon: ''
}

const weatherReducer = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return {
                ...state,
                temperature: action.payload.temperature,
                location: action.payload.location,
                icon: action.payload.icon
            };

        default:
            return state;
    }
}

export default weatherReducer;