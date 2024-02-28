import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';


const Container = styled.div`
  position: relative;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  text-align:left;
  margin-bottom: 20px;
  
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;

`;

const Card = styled.div`
  position: relative; /* Ensure proper positioning for the icon */
  width: 120px;
  height: 200px;
  background-color: #222;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const NextIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  opacity: 0.7;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=b2d47bc45b9596fab31b362d1db590f9`,
            {
              method: 'GET',
              headers: { accept: 'application/json' }
            }
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };
  
    return (
      <Container>
        <Title>Trending Movies</Title>
        <CardContainer>
          {movies.length > 0 && movies.slice(currentIndex, currentIndex + 7).map((movie) => (
            <Card key={movie.id}>
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Card>
          ))}
          <NextButton onClick={handleNext}><IoIosArrowForward /></NextButton>
        </CardContainer>
      </Container>
    );
  };
  
  export default Movies;