import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation/Navigation';
import Introduction from '../components/introduction/Introduction';
require('typeface-great-vibes')

const Container = styled.div`
  background-color: green;

  & .title {
    font-family: Great Vibes;
    font-size: 70px;
    padding: 50px;
  }
`;

const App = () => {
  return (
    <Container className="app">
      <div className="title">Bishop & Polden</div>
      <Navigation className="nav" />
      <Introduction className="intro" />
    </Container>
  );
};

export default App;
