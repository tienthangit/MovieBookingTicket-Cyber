import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movie from "./reducers/movie";
import banner from "./reducers/banner";
import cinema from './reducers/cinema'

const rootReducer = combineReducers({
  movie,
  banner,
  cinema
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
