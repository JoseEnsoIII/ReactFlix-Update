import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const PageContainer = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #000;
  color: #fff;
`;

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;
  overflow: hidden;
`;
const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100px; /* Adjust height as needed */
  bottom: 0;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 1) 100%);
`;
const DetailsContainer = styled.div`
  position: absolute;
  margin:5px;
  width:200px;
  left: 5px;
  bottom: 5px;
  z-index: 1;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 12px;
  text-align:left;
`;

const Overview = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-size: 10px;
`;

const InfoContainer = styled.div`
  margin-top: 10px;
`;

const InfoItem = styled.span`
  margin-right: 10px;
  font-size: 10px;
`;

const PlayButton = styled.button`
  background-color: #e50914;
  border: none;
  color: #fff;
  padding: 5px 10px;
  margin:5px;
  cursor: pointer;
  font-size: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0a16;
  }
`;
const Info = styled.button`
  background-color: grey;
  border: none;
  color: #fff;
  padding: 5px 10px;
  margin:5px;
  cursor: pointer;
  font-size: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0a16;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const NextButton = styled.button`
  position: absolute;
  background-color: transparent;
  top: 50%;
  border: none;
  color: #fff;
  height: 30px;
  right: 10px;
  transform: translateY(-50%);
`;

function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiKey = 'b2d47bc45b9596fab31b362d1db590f9';
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        const results = json.results.filter(result => result.backdrop_path);
        setImages(results);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <PageContainer>
      <CarouselContainer>
        <DetailsContainer>
          <Title>{currentImage && currentImage.title}</Title>
          <Overview>{currentImage && currentImage.overview}</Overview>
          <InfoContainer>
            <InfoItem>Date: {currentImage && currentImage.release_date}</InfoItem>
            <InfoItem>Duration: {currentImage && currentImage.runtime} mins</InfoItem>
          </InfoContainer>
          <PlayButton>Play</PlayButton><Info>More Info</Info>
        </DetailsContainer>
        <CarouselInner style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <CarouselImage
              key={index}
              src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
              alt={`Trending ${image.media_type}`}
            />
          ))}
        </CarouselInner>
        <NextButton onClick={nextImage}>
          <IoIosArrowForward />
        </NextButton>
        <GradientOverlay /> {/* Overlay for the fade effect */}
      </CarouselContainer>
    </PageContainer>
  );
}

export default App;
