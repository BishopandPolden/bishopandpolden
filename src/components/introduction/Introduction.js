import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: intro;
  text-align: center;
  left: 50%;
  top: 50%;
`;

const Introduction = () => {
  return (
    <Container className="intro">
      Flowers
    </Container>
  );
};

export default Introduction;
