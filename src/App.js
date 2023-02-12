import {createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Navbar,MovieDetail,MoviePage,Tv,TvPage } from './Components'
export const Global = createContext();
function App() {
  const imgUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <>
      <Global.Provider value={{imgUrl:imgUrl}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/movieDetails//:img/:title' element={<MovieDetail />} />
            <Route path='/movie/:category/:name' element={<MoviePage />} />
            <Route path='tv/tv/:category/:name' element={<TvPage />} />
          </Routes>
        </Router>
      </Global.Provider>
    </>
  );
}

export default App;
