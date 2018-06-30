import { ACTIVATE_OVERLAY } from './types';


export const closeOverlay = () => dispatch => {

    dispatch({
        type: ACTIVATE_OVERLAY,
        payload: {
            isActiveOverlay: true,
            wichAnimation: 'fadeOutRightBig'
        }
    })

    setTimeout(() => {
        dispatch({
            type: ACTIVATE_OVERLAY,
            payload: {
                isActiveOverlay: false,
                wichAnimation: ''
            }
        })
    }, 300);

}

export const openOverlay = () => dispatch => {

    dispatch({
        type: ACTIVATE_OVERLAY,
        payload: {
            isActiveOverlay: true,
            wichAnimation: 'fadeInLeftBig'
        }
    })

}
