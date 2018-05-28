import { FETCH_CHUCK } from '../actions/types';

const initializeState = {
    value: '',
    image: ''
}

const chuckNorrisReducer = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_CHUCK:
            return {
                ...state,
                value: action.payload.value,
                image: action.payload.image
            }

        default:
            return state;
    }
}

export default chuckNorrisReducer;