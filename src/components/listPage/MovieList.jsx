import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieList from "../../actions/movieList";
import { getMoviesByName } from "../../controllers/movieController";
import { Search } from "../../utils/models/search";
import LinkedTable from "../common/LinkedTable";
import PaginationBox from "../common/PaginationBox";
import '../style/app.css';
import SearchField from "./SearchField";

const MovieList = () => {
    const maxPage = useSelector(state => state.movieList.maxPage);
    const searchData = useSelector(state => state.movieList.searchData);
    const dataList = useSelector(state => state.movieList.dataList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesByName(
            Search(searchData)));
    }, [searchData]);

    return (
        <div className="list-view row">
            <div className="row col-8">
                <SearchField />
            </div>
            <div>
                <LinkedTable
                    data={dataList}
                    page={searchData.page}
                />
            </div>
            <div className="d-flex justify-content-end">
                <PaginationBox
                    currentPage={searchData.page}
                    maxPage={maxPage}
                    nextCallback={() => {
                        dispatch(movieList.movieListSearchDataChanged({ ...searchData, page: searchData.page + 1 }));
                    }}
                    prevCallback={() => {
                        dispatch(movieList.movieListSearchDataChanged({ ...searchData, page: searchData.page - 1 }));
                    }}
                    lastCallback={() => {
                        dispatch(movieList.movieListSearchDataChanged({ ...searchData, page: maxPage }));
                    }}
                    firstCallback={() => {
                        dispatch(movieList.movieListSearchDataChanged({ ...searchData, page: 1 }));
                    }}
                />
            </div>
        </div>
    );
};

export default MovieList;