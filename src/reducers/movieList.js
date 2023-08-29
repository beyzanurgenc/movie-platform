import { createReducer } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum.js";

export const movieList = createReducer({}, (builder) => {
    builder
        .addCase(actionEnum.MOVIE_LIST_DATA_LIST_CHANGED, (state, action) => {
            state.dataList = action.payload;
        })
        .addCase(actionEnum.MOVIE_LIST_SELECTED_DATA_CHANGED, (state, action) => {
            state.selectedData = action.payload;
        })
        .addCase(actionEnum.MOVIE_LIST_MAX_PAGE_CHANGED, (state, action) => {
            state.maxPage = action.payload;
        })
        .addCase(actionEnum.MOVIE_LIST_SEARCH_DATA_CHANGED, (state, action) => {
            state.searchData = action.payload;
        })
});