import { combineReducers } from "redux";
import detailReducer from "./detailReducers";

export default combineReducers({
    name:detailReducer
})