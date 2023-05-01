import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.ul({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
});
export const Item = styled.li({
  padding: '.2rem 1rem',
  border: `1px solid ${theme.colors.textGrey}`,
});
