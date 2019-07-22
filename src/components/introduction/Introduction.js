import React from 'react';
import styled from 'styled-components';

const StyledIntroduction = styled.div`
  display: flex;
  justify-content: center;
`;

const Introduction = () => {
  return (
    <StyledIntroduction className="intro">
      <img src={process.env.PUBLIC_URL + '/frontpage.png'} />
    </StyledIntroduction>
  );
};

export default Introduction;
