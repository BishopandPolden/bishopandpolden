import React from 'react';
import styled from 'styled-components';

const StyledIntroduction = styled.div`
  display: grid;
  grid-template-areas: 'warning' 'img';
  grid-template-rows: 5% 95%;
  height: 100%;
  align-self: center;

  & .warning {
    grid-area: warning;
    text-align: center;
  }

  & .img {
    grid-area: img;
    justify-self: center;
  }
`;

const Introduction = () => {
  return (
    <StyledIntroduction className="intro">
      <p  className="warning">Down for maintenance</p>
      <img src={process.env.PUBLIC_URL + '/frontpage.png'} className="img"/>
    </StyledIntroduction>
  );
};

export default Introduction;
