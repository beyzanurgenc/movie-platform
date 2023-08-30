import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDetail from './components/detailPage/MovieDetail';
import MovieList from './components/listPage/MovieList';
import uiEnum from './utils/constants/uiEnum';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
      errorElement: <div className='d-flex justify-content-center'>{uiEnum.ERROR_PAGE.USER_MESSAGE}</div>,
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