import logger from "redux-logger";
import thunk from "redux-thunk";
import { cookiesReducer } from "./reducers/cookie";
import { nutsReducer } from "./reducers/nut";
import { fruitsReducer } from "./reducers/fruit";
import { vegetablesReducer } from "./reducers/vegetable";
import { loginReducer } from "./reducers/login";
import { userReducer } from "./reducers/user";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

library.add(faCheck);

const store = createStore(
  combineReducers({
    cookies: cookiesReducer,
    nuts: nutsReducer,
    fruits: fruitsReducer,
    vegetables: vegetablesReducer,
    users: userReducer,
    login: loginReducer,
  }),
  applyMiddleware(logger, thunk)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
