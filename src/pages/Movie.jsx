import { NavLink, Outlet } from 'react-router-dom';
//COMPONENTS
import MovieCard from 'components/MovieCard/MovieCard';

const Movie = () => {
  return (
    <div>
      <MovieCard />
      <NavLink to="cast">cast</NavLink>
      <NavLink to="reviews">reviews</NavLink>
      <Outlet />
    </div>
  );
};

export default Movie;
