import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: nav;
  text-align: center;
`;

const Navigation = () => {
  return (
    <Container className="nav">
      <a href="/about-us">About Us</a>
      <a href="/weddings">Weddings</a>
      <a href="/events">Events</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/blog">Blog</a>
    </Container>
  );
};

export default Navigation;
