//COMPONENTS
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <MoviesListItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MoviesList;
