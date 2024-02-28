import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const NewsItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Date = styled.p`
  margin-bottom: 0;
  color: #666;
`;

const Description = styled.p``;

function AnimeNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://api.consumet.org/news/ann/recent-feeds')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <Title>{item.title}</Title>
          <Date>{new Date(item.publishedDate).toLocaleString()}</Date>
          <Description>{item.description}</Description>
        </NewsItem>
      ))}
    </Container>
  );
}

export default AnimeNews;
