import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieList from './components/listPage/MovieList';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
      errorElement: <div>Hata oluştu!</div>,
    },
    // {
    //   path: "contacts/:contactId",
    //   element: <Contact />,
    //   errorElement: <div>Hata oluştu!</div>,
    // },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;