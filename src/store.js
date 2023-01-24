import { configureStore } from "@reduxjs/toolkit";
import mainRed from "./redux/reducers/main";

const store= configureStore({reducer:mainRed})
export default store







