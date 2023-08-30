import movieList from '../actions/movieList';
import ui from '../actions/ui';
import { getMovieDetailRequest, getMoviesByNameRequest } from '../services/movieService';

export const getMoviesByName = (search) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(ui.movieListRequestStatusChanged(true));
            let getMoviesByNameRequestPromise = getMoviesByNameRequest(search);
            getMoviesByNameRequestPromise.then((result) => {
                if (result.Response === "True") {
                    dispatch(movieList.movieListDataListChanged(result.Search));
                    dispatch(movieList.movieListMaxPageChanged(Math.ceil(result.totalResults / 10)));
                } else {
                    dispatch(movieList.movieListDataListChanged([]));
                    dispatch(movieList.movieListMaxPageChanged(1));
                }
                resolve(result);
                dispatch(ui.movieListRequestStatusChanged(false));
            }, (error) => {
                dispatch(movieList.movieListDataListChanged([]));
                dispatch(ui.movieListRequestStatusChanged(false));
                reject([]);
            });
        })
    }
};

export const getMovieDetails = (imdbId) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(ui.movieDetailRequestStatusChanged(true));
            let getMoviesByNameRequestPromise = getMovieDetailRequest(imdbId);
            getMoviesByNameRequestPromise.then((result) => {
                if (result.Response === "True") {
                    dispatch(movieList.movieListSelectedDataChanged(result));
                    resolve(result);
                } else {
                    //TODO: Handle errors.
                    reject({});
                }
                dispatch(ui.movieDetailRequestStatusChanged(false));
            }, (error) => {
                dispatch(ui.movieDetailRequestStatusChanged(false));
                reject({});
            });
        })
    }
};