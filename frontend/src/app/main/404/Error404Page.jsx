/**
 * Error404Page.jsx
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.primary.main};
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 0;
  color: ${props => props.theme.palette.error.main};
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Button = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: ${props => props.theme.palette.primary.dark};
  }
`;

const Error404Page = ({ onGoHome }) => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Button onClick={onGoHome}>Go to Home</Button>
    </Container>
  );
};

export default Error404Page;
