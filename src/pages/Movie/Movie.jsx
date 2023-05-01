import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
//COMPONENTS
import MovieCard from 'components/MovieCard/MovieCard';
//ICONS
import { RiArrowGoBackFill } from 'react-icons/ri';
//STYLES
import theme from 'theme';
import { Container, LinkWrap } from './Movie.styled';

const Movie = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <Container>
      <LinkWrap>
        <Link
          to={backLinkRef.current}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '20px',
            textDecoration: 'none',
            color: theme.colors.text,
          }}
        >
          <RiArrowGoBackFill
            style={{ marginRight: '0.5rem', color: theme.colors.text }}
          />
          BACK
        </Link>
      </LinkWrap>
      <MovieCard />
    </Container>
  );
};

export default Movie;
