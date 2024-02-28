import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/MainPages/Home'
import TvShows from './pages/MainPages/TvShows'
import Anime from './pages/MainPages/Anime'
import News from './pages/MainPages/News'
import MyList from './pages/MainPages/MyList'
import Language from './pages/MainPages/Language'
import Welcome from './pages/MainPages/Welcome'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/anime" element={<Anime />} />
       <Route path='/news' element={<News />} />
      <Route path="/my-list" element={<MyList />} />
      <Route path="/language" element={<Language />} />
    
      <Route path='/welcome' element={<Welcome />} />
     
    </Routes>
  </BrowserRouter>
  )
}

export default App
