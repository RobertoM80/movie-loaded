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

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
