import { combineReducers } from "redux";
import calendar from "./calendar";
import userNameForm from "./userNameForm";

export const createRootReducer = ({router}) => combineReducers({
  router,
  calendar,
  userNameForm
});
