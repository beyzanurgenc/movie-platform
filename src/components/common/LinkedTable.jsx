import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import uiEnum from '../../utils/constants/uiEnum';


const LinkedTable = ({ data, page }) => {

    const startDataNumber = (page - 1) * 10 + 1;
    const navigate = useNavigate();
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>{uiEnum.MAIN_PAGE.NAME}</th>
                    <th>{uiEnum.MAIN_PAGE.YEAR}</th>
                    <th>{uiEnum.MAIN_PAGE.ID}</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? <p>{uiEnum.MAIN_PAGE.NO_DATA}</p> :
                    data.map((film, index) => (
                        <tr key={film.imdbID} onClick={() => { navigate("/movie/" + film.imdbID) }}>
                            <th scope="row">{startDataNumber + index}</th>
                            <td>{film.Title}</td>
                            <td>{film.Year}</td>
                            <td>{film.imdbID}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table >
    );
}


export default LinkedTable;
