import styled from '@emotion/styled';
import theme from 'theme.js';

export const Container = styled.div({
  marginTop: '1rem',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
});
export const AdditionalInfo = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
  flexBasis: '40%',
});
export const Links = styled.div({
  padding: '6px 10px',
  height: '10%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1rem',
  boxSizing: 'border-box',
  border: `1px solid ${theme.colors.textGrey}`,
  borderRadius: '4px',
});
export const Card = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
});
export const Picture = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexBasis: '30%',
});
export const Img = styled.img({
  width: '400px',
  display: 'block',
  border: `1px solid rgba(255,255,255,0.2)`,
  borderRadius: '1rem',
  boxShadow: theme.shadows.box,
});
export const Details = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-sart',
  gap: '1rem',
  flexBasis: '40%',
  fontSize: '26px',
  color: theme.colors.text,
});
export const Title = styled.h2({
  fontSize: '46px',
  fontWeight: '700',
  color: theme.colors.warm,
});
export const Box = styled.div({
  display: 'flex',
  gap: '16px',
});
export const Description = styled.div({
  padding: '1rem',
  border: `1px solid ${theme.colors.textGrey}`,
  borderRadius: '4px',
  '& > strong': {
    color: theme.colors.textDarkRed,
  },
});

export const LogoBox = styled.div({
  height: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: 'rgba(135,30,1, 0.5)',
  backdropFilter: 'blur(5px)',
});
export const Logo = styled.img({ maxHeight: '90%', maxWidth: '100px' });
