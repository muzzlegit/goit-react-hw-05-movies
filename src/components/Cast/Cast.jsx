import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//API
import { getMovieCast } from 'services/movies-API';
//STYLES
import { Container, Item, Img, Name, Empty } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) getMovieCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <Container>
      {cast.length ? (
        cast.map(
          ({ original_name, profile_path }) =>
            profile_path && (
              <Item key={original_name}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                />
                <Name>{original_name}</Name>
              </Item>
            )
        )
      ) : (
        <Empty>Not Found Any Cast</Empty>
      )}
    </Container>
  );
};

export default Cast;
