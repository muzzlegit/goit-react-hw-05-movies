import styled from '@emotion/styled';
import theme from 'theme.js';

export const Nav = styled.nav({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});
export const LinkTitle = styled.span({
  color: theme.white,
  fontSize: '20px',
});
export const Hr = styled.hr({
  margin: '0.1rem 0 1rem 0',
  color: theme.colors.textDarkRed,
});
