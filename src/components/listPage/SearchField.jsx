import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import movieList from "../../actions/movieList.js";
import uiEnum from "../../utils/constants/uiEnum.js";
import DropdownSelect from "../common/DropdownSelect";
import SearchBox from "../common/SearchBox";

const SearchField = () => {
    const searchData = useSelector(state => state.movieList.searchData);
    const [search, setSearch] = useState(JSON.parse(JSON.stringify(searchData)));
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-end">
            <div className="col-auto">
                <SearchBox
                    value={search.name}
                    label={uiEnum.MAIN_PAGE.NAME + " * :"}
                    onInputChangeCallback={(e) => { setSearch(prev => ({ ...prev, name: e.target.value.trim() })) }}
                />
            </div>
            <div className="col-auto ps-3">
                <SearchBox
                    value={search.year}
                    type="number"
                    label={uiEnum.MAIN_PAGE.YEAR + ' :'}
                    onInputChangeCallback={(e) => { setSearch(prev => ({ ...prev, year: e.target.value.trim() })) }}
                />
            </div>
            <div className="col-auto ps-3">
                <DropdownSelect
                    label={uiEnum.MAIN_PAGE.TYPE + ' :'}
                    selectedValue={search.type}
                    onChangeCallback={(value) => { setSearch(prev => ({ ...prev, type: value })) }}
                />
            </div>
            <div className="col-auto ps-3">
                <Button color="primary" disabled={search.name === ""} onClick={() => {
                    dispatch(movieList.movieListSearchDataChanged({ ...searchData, name: search.name, type: search.type, year: search.year }));
                }}>{uiEnum.MAIN_PAGE.SEARCH}</Button>
            </div>
        </div>
    );
};

export default SearchField;