import styled from '@emotion/styled';
import theme from 'theme.js';

export const Container = styled.div({
  padding: '0 1rem',

  // display: 'flex',
  // alignItems: 'center',
  // gap: '20px',
});
export const LinkWrap = styled.div({
  padding: '0.2rem',
  border: `1px solid ${theme.colors.text}`,
  borderRadius: '4px',
  display: 'inline-block',
  color: theme.colors.text,
  '&:hover': {
    boxShadow: `0px 0px 5px 2px ${theme.colors.text}`,
  },
});
