import styled from '@emotion/styled';
import theme from 'theme.js';

export const Form = styled.form({
  padding: '.2rem 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});
export const Input = styled.input({
  padding: '.1rem .5rem',
  height: '20px',
  width: '200px',
  borderRadius: '.3rem',
  color: theme.colors.text,
  fontWeight: 'bold',
  '&:focus': {
    outline: `1px solid ${theme.colors.text}`,
  },
});
export const Button = styled.button({
  color: theme.colors.orange,
  borderRadius: '.3rem',
  backgroundColor: theme.colors.text,
  borderColor: theme.colors.text,
  '&:hover': {
    cursor: 'pointer',
    color: theme.colors.textDarkRed,
  },
});
