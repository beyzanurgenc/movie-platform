const MAIN_PAGE = Object.freeze({
    NAME: 'Movie Title',
    YEAR: 'Year',
    TYPE: 'Type',
    ID: 'IMDB ID',
    NO_DATA: 'No data found.',
    SEARCH: 'SEARCH',
    ALL: "All",
    MOVIE: "Movie",
    SERIES: "Series",
    EPISODE: "Episode"
});

const ERROR_PAGE = Object.freeze({
    HEADER: 'Üzgünüz!',
    USER_MESSAGE: 'Üzgünüz, böyle bir sayfa bulunamadı!'
});

const uiEnum = {
    MAIN_PAGE,
    ERROR_PAGE
};

export default uiEnum;