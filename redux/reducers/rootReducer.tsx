import activePageReducer from "./activePageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  activePage: activePageReducer,
});

export default rootReducer;
