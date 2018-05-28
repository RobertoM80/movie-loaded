import { FETCH_BEST_MOVIES_2018 } from "../actions/types";

const initializeState = {
    best_movies_2018: []
}

const moviesReducer = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_BEST_MOVIES_2018:
            return {
                ...state,
                best_movies_2018: action.payload.best_movies_2018
            };

        default:
            return state;
    }
}

export default moviesReducer;