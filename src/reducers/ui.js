import { createReducer } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum";

export const ui = createReducer({}, (builder) => {
    builder
        .addCase(actionEnum.LOGIN_PAGE_REQUEST_STATUS_CHANGED, (state, action) => {
            state.isLoginInProgress = action.payload;
        })
});