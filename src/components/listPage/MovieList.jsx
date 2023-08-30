import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import movieList from "../../actions/movieList";
import { getMoviesByName } from "../../controllers/movieController";
import { Search } from "../../utils/models/search";
import LinkedTable from "../common/LinkedTable";
import PaginationBox from "../common/PaginationBox";
import '../style/app.scss';
import SearchField from "./SearchField";

const MovieList = () => {
    const maxPage = useSelector(state => state.movieList.maxPage);
    const searchData = useSelector(state => state.movieList.searchData);
    const dataList = useSelector(state => state.movieList.dataList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMoviesByName(
            Search(searchData)));
    }, [searchData]);

    return (
        <div className="list-view row m-0 p-0">
            <div className="row col-10 pt-5">
                <SearchField />
            </div>
            <div className="row col-10 py-4 linked-table-row">
                <LinkedTable
                    data={dataList}
                    page={searchData.page}
                    onClickCallback={(imdbId) => { navigate("/movie/" + imdbId) }}
                />
            </div>
            <div className="row col-10">
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