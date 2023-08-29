import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

const URL = REACT_APP_API_URL + '/?apiKey=' + REACT_APP_API_KEY;

const searchUrlBuilder = (search) => {
    let baseUrl = URL + '&s=' + search.name + '&page=' + search.page

    if (search.year !== "" && search.type !== "") {
        baseUrl += "&y=" + search.year + "&type=" + search.type;
    } else if (search.type !== "") {
        baseUrl += "&type=" + search.type;
    } else if (search.year !== "") {
        baseUrl += "&y=" + search.year;
    }

    return baseUrl;
}

export const getMoviesByNameRequest = (search) => {
    return new Promise(function (resolve, reject) {
        let getMoviesByNameRequest = axios.get(
            searchUrlBuilder(search)
        );
        getMoviesByNameRequest.then(function (result) {
            resolve(result.data)
        }, function (error) {
            reject(error.response);
        });
    });
};

export const getMovieDetailRequest = (imdbId) => {
    return new Promise(function (resolve, reject) {
        let getMoviesByNameRequest = axios.get(
            URL + '&i=' + imdbId
        );
        getMoviesByNameRequest.then(function (result) {
            resolve(result.data)
        }, function (error) {
            reject(error.response);
        });
    });
};