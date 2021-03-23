import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import chuckNorrisReducer from "config/reducers/chuckNorrisReducer";
import moviesReducer from "config/reducers/moviesReducer";
import overlayReducer from "config/reducers/overlayReducer";
import movieTrailerReducer from "config/reducers/movieTrailerReducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  chuckNorris: chuckNorrisReducer,
  movies: moviesReducer,
  trailer: movieTrailerReducer,
  overlay: overlayReducer,
});

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware), devTools)
);

export default store;
