import { combineReducers } from "redux";
import { customerReducer } from "./reducers/customerReducer";
import { reducer as formReducer } from "redux-form";

export const commonRootReducer = combineReducers({
  CustomerReducer: customerReducer,
  form: formReducer,
});
