import * as types from "../actions/types";

const initializeState = {
  status: "idle",
  active: null,
  popular: [],
  rated: [],
  upcoming: [],
  error: null,
};

const moviesReducer = (state = initializeState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_START:
      return {
        ...state,
        status: "pending",
        error: null,
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        status: "success",
        [action.payload.type]: action.payload.movies,
        error: null,
      };
    case types.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        status: "failure",
        error: action.payload.error,
      };
    case types.UPDATE_VIEW:
      return {
        ...state,
        active: action.payload.view,
      };
    default:
      return state;
  }
};

export default moviesReducer;
