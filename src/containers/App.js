import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation/Navigation';
import Introduction from '../components/introduction/Introduction';
require('typeface-great-vibes')

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: 'title' 'nav' 'body';
  grid-template-rows: 15% 5% 80%;
  height: 100%;

  & .title {
    grid-area: title;
    font-family: Great Vibes;
    font-size: 100px;
    align-self: center;
    justify-self: center;
  }

  & .nav {
    grid-area: nav;
    align-self: center;
    justify-self: center;
    text-align: center;
    border-style: solid hidden;
    border-width: 1px;
    width: 100%;
    padding: 5px 0px;

    & a:link, a:active, a:visited {
      text-decoration: none;
      padding: 0px 50px;
      color: black;
    }

    & a:hover {
      color: palevioletred;
    }
  }

  & .body {
    grid-area: body;
  }
`;

const App = () => {
  return (
    <StyledApp className="app">
      <div className="title">Bishop & Polden</div>
      <Navigation className="nav" />
      <Introduction className="body" />
    </StyledApp>
  );
};

export default App;
