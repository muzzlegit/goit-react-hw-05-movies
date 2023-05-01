import styled from '@emotion/styled';
import theme from 'theme.js';

export const Container = styled.div({
  marginTop: '1rem',
  height: '500px',
  width: '100%',
  overflowY: 'scroll',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1rem',
});
export const Item = styled.div({
  textAlign: 'center',
  width: '20%',
});
export const Img = styled.img({
  marginBottom: '.5rem',
  width: '100%',
});
export const Name = styled.h3({
  color: theme.colors.text,
});
export const Empty = styled.h3({
  fontSize: '20px',
  color: theme.colors.textRed,
});
