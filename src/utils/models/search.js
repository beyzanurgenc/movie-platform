export const Search = ({
    name = "Pokemon",
    page = "",
    year = "",
    type = ""
}) => {
    return {
        name: name,
        page: page,
        year: year,
        type: type
    };
};