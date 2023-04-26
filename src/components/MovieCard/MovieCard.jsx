import { useParams, useLocation, Link } from 'react-router-dom';

const MovieCard = () => {
  const { movieId } = useParams();
  const location = useLocation();

  return (
    <div>
      MovieCard
      <Link to={location.state.from}>back</Link>
      <div>{movieId}</div>
    </div>
  );
};

export default MovieCard;
