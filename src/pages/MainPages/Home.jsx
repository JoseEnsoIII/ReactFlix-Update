import React from 'react';
import Navbar from '../Header/Navbar'; 
import MainSection from '../Section/MainSection'
import AllTrending from '../Section/AllTrending'
import MovieSection from '../Section/MovieSection'
import TvShows from '../Section/TVShows'
import Footer from '../Footer/footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <AllTrending />
      <MovieSection />
      <TvShows />
      <Footer />
    </div>
  );
};

export default Home;
