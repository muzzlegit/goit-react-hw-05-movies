import { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
//API
import { getMovieById } from 'services/movies-API';
//ICoNS
import { BsStars, BsFillPeopleFill } from 'react-icons/bs';
//STYLES
import theme from 'theme';
import {
  Container,
  Card,
  Img,
  Details,
  Title,
  Description,
  Box,
  AdditionalInfo,
  Links,
  Picture,
  LogoBox,
  Logo,
} from './MovieCard.styled';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const {
    title,
    overview,
    genres,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    production_companies,
  } = movie;

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);
  return (
    <Container>
      <Card>
        <Details>
          <Title>{title}</Title>
          <Description>
            <strong>Release date: </strong>
            {release_date}
          </Description>
          <Description>
            <Box>
              <BsStars title="voute" color={theme.colors.orange} />{' '}
              {vote_average}
              <BsFillPeopleFill
                title="voutes"
                color={theme.colors.orange}
              />{' '}
              {vote_count}
            </Box>
          </Description>
          <Box>
            {genres &&
              genres.map(({ name }) => (
                <Description key={name}>{name}</Description>
              ))}
          </Box>
          <Description>
            <strong>Owerview: </strong>
            {overview}
          </Description>
        </Details>
        <Picture>
          <Img
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </Picture>
        <AdditionalInfo>
          <Links>
            <NavLink
              to="cast"
              style={({ isActive }) => {
                return {
                  display: 'block',
                  fontSize: '20px',
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? theme.colors.textRed : theme.colors.text,
                };
              }}
            >
              cast
            </NavLink>
            <NavLink
              to="reviews"
              style={({ isActive }) => {
                return {
                  display: 'block',
                  fontSize: '20px',
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? theme.colors.textRed : theme.colors.text,
                };
              }}
            >
              reviews
            </NavLink>
          </Links>
          <Outlet />
        </AdditionalInfo>
      </Card>

      <LogoBox>
        {production_companies &&
          production_companies.map(
            ({ logo_path, name }) =>
              logo_path && (
                <Logo
                  key={name}
                  src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                  alt={title}
                  title={name}
                />
              )
          )}
      </LogoBox>
    </Container>
  );
};

export default MovieCard;
