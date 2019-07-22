import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.div`

`;

const Navigation = () => {
  return (
    <StyledNavigation className="nav">
      <a href="/about-us">About Us</a>
      <a href="/weddings">Weddings</a>
      <a href="/gallery">Gallery</a>
      <a href="/testimonials">Testimonials</a>
      <a href="/contact-us">Contact Us</a>
    </StyledNavigation>
  );
};

export default Navigation;
