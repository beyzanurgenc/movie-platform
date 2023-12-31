import { combineReducers } from "redux";
import { movieList } from "./movieList";
import { ui } from "./ui";

const appReducer = combineReducers({
    ui,
    movieList
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;