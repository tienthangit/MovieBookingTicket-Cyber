import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import movie from "./reducers/movie";
import banner from "./reducers/banner";
import cinema from "./reducers/cinema";
import { movieReducers } from "./reducers/movieReducers";

const rootReducer = combineReducers({
  userReducer,
  movieReducers,
  movie,
  banner,
  cinema,
});
// để sài redux devtool
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;
