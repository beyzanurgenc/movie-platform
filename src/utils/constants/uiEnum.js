const MAIN_PAGE = Object.freeze({
    NAME: 'Title',
    YEAR: 'Year',
    TYPE: 'Type',
    ID: 'IMDB ID',
    NO_DATA: 'No data found.',
    SEARCH: 'SEARCH',
    ALL: "all",
    MOVIE: "movie",
    SERIES: "series",
    EPISODE: "episode",
    PREV: "Prev",
    NEXT: "Next",
    TIME: "Duration",
    DIRECTOR: "Director",
    ACTORS: "Actors",
    IMDB_RATING: "IMDB Rating"
});

const ERROR_PAGE = Object.freeze({
    USER_MESSAGE: 'Sorry, page is not found!'
});

const uiEnum = {
    MAIN_PAGE,
    ERROR_PAGE
};

export default uiEnum;