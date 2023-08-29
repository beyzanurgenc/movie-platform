import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const URL = REACT_APP_API_URL + '/?apiKey=' + REACT_APP_API_KEY;

export const getMoviesByNameRequest = ({ name, page }) => {
    return new Promise(function (resolve, reject) {
        let getMoviesByNameRequest = axios.get(
            URL + '&s=' + name + '&page=' + page
        );
        getMoviesByNameRequest.then(function (result) {
            resolve(result.data)
        }, function (error) {
            reject(error.response);
        });
    });
};