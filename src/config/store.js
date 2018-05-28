import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import isLoadingReducer from './reducers/isLoadingReducer';
import chuckNorrisReducer from './reducers/chuckNorrisReducer';
import moviesReducer from './reducers/moviesReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    weather: weatherReducer,
    isLoading: isLoadingReducer,
    chuckNorris: chuckNorrisReducer,
    movies: moviesReducer

});

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;