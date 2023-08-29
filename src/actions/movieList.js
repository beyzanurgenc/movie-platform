import { createAction } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum";

export default {
    movieListDataListChanged: createAction(actionEnum.MOVIE_LIST_DATA_LIST_CHANGED),
    movieListSelectedDataChanged: createAction(actionEnum.MOVIE_LIST_SELECTED_DATA_CHANGED),
    movieListMaxPageChanged: createAction(actionEnum.MOVIE_LIST_MAX_PAGE_CHANGED),
    movieListSearchDataChanged: createAction(actionEnum.MOVIE_LIST_SEARCH_DATA_CHANGED),
};