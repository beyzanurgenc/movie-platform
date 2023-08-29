import LinkedTable from "../common/LinkedTable";
import PaginationBox from "../common/PaginationBox";
import SearchBox from "../common/SearchBox";

const MovieList = () => {
    return (
        <>
            <SearchBox />
            <LinkedTable />
            <PaginationBox currentPage={1} maxPage={12}/>
        </>
    );
};

export default MovieList;