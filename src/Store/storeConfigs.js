import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { movieReducers } from "./reducers/movieReducers";
import { quanLyRapReducers } from "./reducers/QuanLyRapReducers";
import bookingTicketReducer from "./reducers/bookingTicketReducer";

const rootReducer = combineReducers({
  userReducer,
  movieReducers,
  bookingTicketReducer,
  quanLyRapReducers,
});
// để sài redux devtool
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;
