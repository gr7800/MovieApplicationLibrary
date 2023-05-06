import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "./movies/movies.reducer";

const rootReducer = combineReducers({
  movies:moviesReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let enhanser = composer(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhanser);
