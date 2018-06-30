import { ACTIVATE_OVERLAY } from '../actions/types';

const initializeState = {
    isOverlayActive: false,
    animateInOut: ''
}

const overlayReducer = (state = initializeState, action) => {
    switch (action.type) {
        case ACTIVATE_OVERLAY:
            return {
                ...state,
                isOverlayActive: action.payload.isActiveOverlay,
                wichAnimation: action.payload.wichAnimation
            }

        default:
            return state;
    }
}

export default overlayReducer;