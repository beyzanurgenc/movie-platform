import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import movieList from '../../actions/movieList';
import { getMovieDetails } from '../../controllers/movieController';
import HistoryBackButton from '../common/HistoryBackButton';

const MovieDetail = () => {
    let { id } = useParams();
    const selectedData = useSelector(state => state.movieList.selectedData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetails(id));
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="main-img">
                        <img className="img-fluid" src={selectedData.Poster} alt="product" />
                    </div>
                </div>
                <div className="col-7">
                    <div className="main-description px-2">
                        <div className="category-name text-bold">
                            {selectedData.Type}
                        </div>
                        <div className="product-title text-bold my-3">
                            {selectedData.Title}
                        </div>
                        <div className="category-name text-bold">
                            {"Süre: " + selectedData.Runtime}
                        </div>
                        <div className="category-name text-bold">
                            {"Yönetmen: " + selectedData.Director}
                        </div>
                        <div className="category-name text-bold">
                            {"Oyuncular: " + selectedData.Actors}
                        </div>
                        <div className="category-name text-bold">
                            {"IMDB Puanı: " + selectedData.imdbRating}
                        </div>
                        <div className="category-name text-bold">
                            {"IMDB Puanı: " + selectedData.imdbRating}
                        </div>
                    </div>
                    <div className="main-description px-2">
                        <div className="category-name text-bold">
                            {selectedData.Plot}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-end'>
                <div className='col-2'>
                    <HistoryBackButton onClickCallback={() => { dispatch(movieList.movieListSelectedDataChanged({})) }} />
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;