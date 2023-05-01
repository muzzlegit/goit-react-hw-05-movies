import { useEffect } from 'react';
import { useState } from 'react';
//COMPONENTS
import MoviesList from 'components/MoviesList/MoviesList';
//API
import { getTrendingMovies } from 'services/movies-API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res =>
        res.results.map(({ id, original_title }) => ({
          id,
          title: original_title,
        }))
      )
      .then(res => setMovies(res));
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
