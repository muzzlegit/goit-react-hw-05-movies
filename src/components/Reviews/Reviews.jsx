import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//API
import { getMovieReviews } from 'services/movies-API';
//STYLES
import { Container, Item, Name, Text, Empty } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId) getMovieReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <Container>
      {reviews.length ? (
        reviews.map(({ author, content }) => (
          <Item key={author}>
            <Name>{author}</Name>
            <Text>{content}</Text>
          </Item>
        ))
      ) : (
        <Empty>Not Found Any Reviews</Empty>
      )}
    </Container>
  );
};

export default Reviews;
