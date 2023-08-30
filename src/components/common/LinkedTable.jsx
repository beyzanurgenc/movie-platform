import React from 'react';
import { Table } from 'reactstrap';
import uiEnum from '../../utils/constants/uiEnum';


const LinkedTable = ({ data, page, onClickCallback }) => {

    const startDataNumber = (page - 1) * 10 + 1;
    return (
        <Table bordered striped className='selectable-table'>
            <thead>
                <tr>
                    <th style={{width: "7%"}}>#</th>
                    <th style={{width: "40%"}}>{uiEnum.MAIN_PAGE.NAME}</th>
                    <th style={{width: "40%"}}>{uiEnum.MAIN_PAGE.YEAR}</th>
                    <th style={{width: "13%"}}>{uiEnum.MAIN_PAGE.ID}</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? <p>{uiEnum.MAIN_PAGE.NO_DATA}</p> :
                    data.map((movie, index) => (
                        <tr key={movie.imdbID} onClick={() => { onClickCallback(movie.imdbID) }}>
                            <th scope="row">{startDataNumber + index}</th>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.imdbID}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table >
    );
}


export default LinkedTable;
