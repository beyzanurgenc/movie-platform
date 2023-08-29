// PACKAGES
import React from 'react';
import { Input, InputGroup, Label } from 'reactstrap';

const SearchBox = ({ value, type = "string", label,onInputChangeCallback }) => {

    return (
        <InputGroup >
            <Label className='me-4 my-auto' for='inputField'>{label}</Label>
            <Input
                id='inputField'
                type={type}
                placeholder={label + '...'}
                onChange={(e) => onInputChangeCallback(e)}
                value={value}
            />
        </InputGroup>
    );
}

export default SearchBox;