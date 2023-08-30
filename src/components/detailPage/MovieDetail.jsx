import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import movieList from '../../actions/movieList';
import { getMovieDetails } from '../../controllers/movieController';
import uiEnum from '../../utils/constants/uiEnum';
import HistoryBackButton from '../common/HistoryBackButton';
import GlobalLoading from '../common/GlobalLoading';

const MovieDetail = () => {
    let { id } = useParams();
    const selectedData = useSelector(state => state.movieList.selectedData);
    const isInProgress = useSelector(state => state.ui.isMovieDetailRequestInProgress);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getMovieDetails(id)).catch(() => {
            navigate(-1);
        });
    }, [id]);

    return (
        <div className="container">
            {isInProgress ? <GlobalLoading /> :
                <>
                    <div className="row">
                        <div className="col-5">
                            <div className="main-img">
                                <img className="img-fluid" src={selectedData.Poster} alt="movie" />
                            </div>
                        </div>
                        <div className="col-7 row">
                            <div className="main-description px-2">
                                <div className="movie-title text-bold my-3">
                                    {selectedData.Title}
                                </div>
                                <div className="movie-name text-bold">
                                    {uiEnum.MAIN_PAGE.TYPE + ": " + selectedData.Type}
                                </div>
                                {
                                    selectedData.Runtime !== "N/A" ?
                                        <div className="movie-name text-bold">
                                            {uiEnum.MAIN_PAGE.TIME + ": " + selectedData.Runtime}
                                        </div> : null
                                }
                                {
                                    selectedData.Director !== "N/A" ?
                                        <div className="movie-name text-bold">
                                            {uiEnum.MAIN_PAGE.DIRECTOR + ": " + selectedData.Director}
                                        </div> : null
                                }
                                {
                                    selectedData.Actors !== "N/A" ?
                                        <div className="movie-name text-bold">
                                            {uiEnum.MAIN_PAGE.ACTORS + ": " + selectedData.Actors}
                                        </div> : null
                                }
                                {
                                    selectedData.imdbRating !== "N/A" ?
                                        <div className="movie-name text-bold">
                                            {uiEnum.MAIN_PAGE.IMDB_RATING + ": " + selectedData.imdbRating}
                                        </div> : null
                                }
                            </div>
                            <div className="main-description px-2">
                                {
                                    selectedData.Plot !== "N/A" ?
                                        <div className="movie-name text-bold">
                                            {selectedData.Plot}
                                        </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-end'>
                        <div className='col-2'>
                            <HistoryBackButton onClickCallback={() => { dispatch(movieList.movieListSelectedDataChanged({})) }} />
                        </div>
                    </div>
                </>}
        </div>
    );
};

export default MovieDetail;