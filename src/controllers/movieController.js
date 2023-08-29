import { getMoviesByNameRequest } from '../services/movieService';

export const getMoviesByName = ({ name, page }) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // dispatch(uiActions.algorithmProgressRequestStatusChanged(true));
            let getMoviesByNameRequestPromise = getMoviesByNameRequest({ name, page });
            getMoviesByNameRequestPromise.then((result) => {
                resolve(result);
                // dispatch(uiActions.algorithmProgressRequestStatusChanged(false));
            }, (error) => {
                // dispatch(uiActions.algorithmProgressRequestStatusChanged(false));
                reject([]);
            });
        })
    }
};