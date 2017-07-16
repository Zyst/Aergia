// @flow
import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import counter from "./counter";
import task from "./task";

const rootReducer = combineReducers({
  counter,
  task,
  router
});

export default rootReducer;
