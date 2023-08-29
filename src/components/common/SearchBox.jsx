// PACKAGES
import React, { useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

const SearchBox = ({ searchButtonCallback }) => {

    const [searchText, setSearchText] = useState("");

    const onSearchInputChange = (e) => {
        let trimmedValue = e.target.value.trim();
        setSearchText(trimmedValue);
    }

    return (
        <InputGroup className='col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0'>
            <Input placeholder={"Arama yap..."} onChange={(e) => onSearchInputChange(e)} />
            <InputGroup addonType="append">
                <Button color='primary' onClick={() => searchButtonCallback(searchText)}>
                    {/* <FontAwesomeIcon icon={faSearch} size='1x' color='white' /> */}
                </Button>
            </InputGroup>
        </InputGroup>
    );
}


export default SearchBox;
