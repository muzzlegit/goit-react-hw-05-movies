import React from 'react';
import { NavLink } from 'react-router-dom';
//STYLES
import theme from 'theme';
import { Container, Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Title>Page Not Found</Title>
      <NavLink
        to="/"
        style={{
          padding: '0.2rem .5rem',
          fontSize: '20px',
          textDecoration: 'none',
          border: `1px solid ${theme.colors.textDarkRed}`,
          borderRadius: '4px',
          color: theme.colors.text,
        }}
      >
        Back to Home page
      </NavLink>
    </Container>
  );
};

export default NotFoundPage;
