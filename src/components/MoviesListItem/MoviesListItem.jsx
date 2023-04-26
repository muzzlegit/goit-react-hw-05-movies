import { Link, useLocation } from 'react-router-dom';

const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        <div>{movie.name}</div>
      </Link>
    </li>
  );
};

export default MoviesListItem;
