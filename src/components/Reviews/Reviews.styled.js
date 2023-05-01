import styled from '@emotion/styled';
import theme from 'theme.js';

export const Container = styled.div({
  marginTop: '1rem',
  padding: '0 1rem',
  height: '500px',
  width: '100%',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
});
export const Item = styled.div({
  textAlign: 'center',
});

export const Name = styled.h3({
  marginBottom: '.5rem',
  fontWeight: 'bold',
  color: theme.colors.textDarkRed,
});
export const Text = styled.p({
  color: theme.colors.text,
});
export const Empty = styled.h3({
  fontSize: '20px',
  color: theme.colors.textRed,
});
