import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDetail from './components/detailPage/MovieDetail';
import MovieList from './components/listPage/MovieList';

const App = () => {
  const dataList = useSelector(state => state.movieList.dataList);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
      errorElement: <div>Hata oluştu!</div>,
    },
    {
      path: "movie/:id",
      element: <MovieDetail />
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;