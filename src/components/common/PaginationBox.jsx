import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const PaginationBox = ({ firstCallback, lastCallback, nextCallback, prevCallback, currentPage, maxPage }) => {

    const checkPrevFirstDisable = (currentPage) => {
        return currentPage === 1;
    }

    const checkNextLastDisable = (currentPage, maxPage) => {
        return currentPage === maxPage;
    }

    return (
        <div>
            <ButtonToolbar>
                <ButtonGroup aria-label="buttonGroup">
                    <Button
                        color="primary"
                        size='sm'
                        onClick={() => firstCallback()}
                        disabled={checkPrevFirstDisable(currentPage)}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="primary"
                        outline
                        size='sm'
                        onClick={() => prevCallback()}
                        disabled={checkPrevFirstDisable(currentPage)}
                    >
                        {"Prev"}
                    </Button>
                    <span className="input-group-text mr-2 ml-2">
                        {currentPage}{' of '}{maxPage}
                    </span>
                    <Button
                        color="primary"
                        outline
                        size='sm'
                        onClick={() => nextCallback()}
                        disabled={checkNextLastDisable(currentPage, maxPage)}
                    >
                        {"Next"}
                    </Button>
                    <Button
                        color="primary"
                        size='sm'
                        onClick={() => lastCallback()}
                        disabled={checkNextLastDisable(currentPage, maxPage)}
                    >
                        {">>"}
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>

        </div>
    );
}


export default PaginationBox;
