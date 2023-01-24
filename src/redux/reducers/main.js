import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const mainRed = combineReducers({
    cartReducer,
})
export default mainRed;