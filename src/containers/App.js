import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation/Navigation';
import Introduction from '../components/introduction/Introduction';
require('typeface-great-vibes')

const Container = styled.div`
  & .title {
    font-family: typeface-great-vibes;
  }
`;

const App = () => {
  return (
    <Container className="app">
      <div className="title">Bishop and Polden</div>
      <Navigation className="nav" />
      <Introduction className="intro" />
    </Container>
  );
};

export default App;
