import React from 'react';
import Navbar from '../Header/Navbar'; 
import AnimeNews from '../News/AnimeNews'
import Footer from '../Footer/footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <AnimeNews />
      <Footer />
    </div>
  );
};

export default Home;
