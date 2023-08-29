import { createReducer } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum.js";

export const ui = createReducer({}, (builder) => {
    builder
        .addCase(actionEnum.MOVIE_LIST_REQUEST_STATUS_CHANGED, (state, action) => {
            state.isMovieListRequestInProgress = action.payload;
        })
});