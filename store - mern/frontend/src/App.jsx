import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateMovie from './pages/CreateMovies.jsx';
import ShowMovie from './pages/ShowMovie.jsx';
import EditMovie from './pages/EditMovie.jsx';
import DeleteMovie from './pages/DeleteMovies.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/create' element={<CreateMovie />} />
      <Route path='/movies/details/:id' element={<ShowMovie />} />
      <Route path='/movies/edit/:id' element={<EditMovie />} />
      <Route path='/movies/delete/:id' element={<DeleteMovie />} />
    </Routes>
  );
};

export default App;