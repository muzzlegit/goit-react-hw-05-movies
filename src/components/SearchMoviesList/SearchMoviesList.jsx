import { Link, useLocation } from 'react-router-dom';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
            {movie.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default SearchMoviesList;
