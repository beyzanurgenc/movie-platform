import { createAction } from "@reduxjs/toolkit";
import actionEnum from "../utils/constants/actionEnum";

export default {
    movieListRequestStatusChanged: createAction(actionEnum.MOVIE_LIST_REQUEST_STATUS_CHANGED),
    movieDetailRequestStatusChanged: createAction(actionEnum.MOVIE_DETAIL_REQUEST_STATUS_CHANGED)
};