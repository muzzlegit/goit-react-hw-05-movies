import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
//STYLES
import theme from 'theme';
import { Item } from './MoviesListItem.styled';

const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <Item>
      <Link
        to={`movies/${movie.id}`}
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
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
