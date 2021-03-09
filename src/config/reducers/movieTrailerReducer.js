import * as types from "../actions/types";

const initializeState = {
  status: "idle",
  error: null,
  currentYoutubeTrailerMovieId: "",
  currentYoutubeTrailerMovieTitle: "",
};

const movieTrailerReducer = (state = initializeState, action) => {
  switch (action.type) {
    case types.FETCH_YOUTUBE_MOVIE_START:
      return {
        ...state,
        error: null,
        status: "pending",
      };

    case types.FETCH_YOUTUBE_MOVIE_SUCCESS:
      return {
        ...state,
        error: null,
        status: "success",
        currentYoutubeTrailerMovieId:
          action.payload.currentYoutubeTrailerMovieId,
        currentYoutubeTrailerMovieTitle:
          action.payload.currentYoutubeTrailerMovieTitle,
      };

    case types.FETCH_YOUTUBE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        status: "failure",
      };

    default:
      return state;
  }
};

export default movieTrailerReducer;
