import { combineReducers } from "redux";

import ReducerChrono from "./chrono";
import reducerDragon from "./dragon";

export default combineReducers({
    ReducerChrono: ReducerChrono,
    reducerDragon: reducerDragon,
});
