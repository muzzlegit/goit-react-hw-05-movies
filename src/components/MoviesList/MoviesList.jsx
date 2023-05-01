import PropTypes from 'prop-types';
//COMPONENTS
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
//STYLES
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return <MoviesListItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
