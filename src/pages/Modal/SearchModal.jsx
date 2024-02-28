import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #141414;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  width: 80%; /* Adjust width as needed */
  max-width: 800px; /* Limit maximum width */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

const SearchResult = styled.div`
  width:100%;
`;

const ResultImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  padding:5px;
  margin-top:-10px;
`;

const ResultCard = styled.div`
  background-color: #262626;
  width: 150px;
  border-radius: 5px;
  margin: 5px; /* Set margin to 5px */
  display: flex;
  flex-direction: column; /* Change flex direction to column */
  align-items: center;
  text-align: center;
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent text from wrapping */
  text-decoration: none; /* Remove default underline */

  &:hover {
    transform: scale(0.95); /* Zoom out slightly on hover */
  }
`;

const ResultDetails = styled.div`
  margin-top: 10px; /* Add margin at the top */
  color: white;
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Show ellipsis for overflow text */
  max-width: 160px; /* Limit maximum width */
`;

const SearchResultPage = ({ match }) => {
  // This is a placeholder component for the result page
  const resultId = match.params.id;
  return (
    <div>
      <h2>Result Page for ID: {resultId}</h2>
      {/* Add more details or components for the result page */}
    </div>
  );
};

const SearchModal = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = 'b2d47bc45b9596fab31b362d1db590f9';

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const responses = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${searchQuery}`),
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`),
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}`),
        axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchQuery}`),
        axios.get(`https://api.themoviedb.org/3/search/collection?api_key=${API_KEY}&query=${searchQuery}`)
      ]);

      const combinedResults = responses.reduce((acc, response) => {
        acc.push(...response.data.results);
        return acc;
      }, []);

      setSearchResults(combinedResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getResultLink = (result) => {
    if (result.media_type === "movie") {
      return `/movies/${result.id}`;
    } else if (result.media_type === "tv") {
      return `/tvshows/${result.id}`;
    } else if (result.media_type === "person") {
      return `/people/${result.id}`;
    } else {
      return "#"; // Default link if media type is not recognized
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h2 style={{ color: 'white' }}>Search</h2>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
        <Slider  infinite={true} slidesToShow={5} slidesToScroll={1}>
          {searchResults.map((result) => (
            <SearchResult key={result.id}>
              <Link to={getResultLink(result)} style={{ textDecoration: 'none' }}>
                <ResultCard>
                  <ResultImage src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.name || result.title} />
                  <ResultDetails>
                    <p>{result.name || result.title}</p>
                  </ResultDetails>
                </ResultCard>
              </Link>
            </SearchResult>
          ))}
        </Slider>
      </ModalContent>
    </ModalBackground>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/movies/:id" component={SearchResultPage} />
        <Route path="/tvshows/:id" component={SearchResultPage} />
        <Route path="/people/:id" component={SearchResultPage} />
        <SearchModal onClose={() => {}} />
      </div>
    </Router>
  );
};

export default App;
