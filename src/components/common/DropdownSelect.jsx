import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, InputGroup, Label } from 'reactstrap';
import uiEnum from '../../utils/constants/uiEnum';

const DropdownSelect = ({ label, selectedValue, onChangeCallback }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <InputGroup>
            <Label className='me-4 my-auto'>{label}</Label>
            <Dropdown isOpen={isOpen} toggle={() => { setIsOpen(!isOpen) }}>
                <DropdownToggle className='dropdown-view' caret>{selectedValue === "" ? uiEnum.MAIN_PAGE.ALL : selectedValue}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => { onChangeCallback("") }}>{uiEnum.MAIN_PAGE.ALL}</DropdownItem>
                    <DropdownItem onClick={() => { onChangeCallback("movie") }}>{uiEnum.MAIN_PAGE.MOVIE}</DropdownItem>
                    <DropdownItem onClick={() => { onChangeCallback("series") }}>{uiEnum.MAIN_PAGE.SERIES}</DropdownItem>
                    <DropdownItem onClick={() => { onChangeCallback("episode") }}>{uiEnum.MAIN_PAGE.EPISODE}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </InputGroup>
    );
}


export default DropdownSelect;
