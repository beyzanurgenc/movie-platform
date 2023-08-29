import { createReducer } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum";

export const movieList = createReducer({}, (builder) => {
    builder
        .addCase(actionEnum.LOGIN_PAGE_REQUEST_STATUS_CHANGED, (state, action) => {
            state.isLoginInProgress = action.payload;
        })
        .addCase(actionEnum.AUTHENTICATION_MODAL_STATUS_CHANGED, (state, action) => {
            state.isAuthenticationModalOpen = action.payload;
        })
        .addCase(actionEnum.ALGORITHM_PARAMS_REQUEST_STATUS_CHANGED, (state, action) => {
            state.isAlgorithmInProgress = action.payload;
        })
        .addCase(actionEnum.DYNAMIC_VALUES_REQUEST_STATUS_CHANGED, (state, action) => {
            state.isDynamicValuesInProgress = action.payload;
        })
        .addCase(actionEnum.BASIC_LEVEL_CARD_STATUS_CHANGED, (state, action) => {
            state.isBasicLevelCardCollapsed = action.payload;
        })
});