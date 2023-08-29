import { movieList } from "./logs";
import { ui } from "./ui";

const appReducer = combineReducers({
    ui,
    movieList
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;