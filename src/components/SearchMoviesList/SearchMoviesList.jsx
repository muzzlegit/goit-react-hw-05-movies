import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
//STYLES
import theme from 'theme';
import { List, Item } from './SearchMoviesList.styled';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              style={{
                display: 'block',
                fontSize: '1rem',
                textDecoration: 'none',
                color: theme.colors.text,
              }}
            >
              {movie.title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default SearchMoviesList;

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
