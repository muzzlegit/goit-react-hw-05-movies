import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
//COMPONENTS
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
//API
import { getMoviesByQuery } from 'services/movies-API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesChecker, setMoviesChecker] = useState(true);

  const searched = searchParams.get('query');

  useEffect(() => {
    if (searched)
      getMoviesByQuery(searched.trim()).then(res => {
        res.results.length ? setMoviesChecker(true) : setMoviesChecker(false);
        setMovies(res.results);
      });
  }, [searched]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    getMoviesByQuery(query.trim()).then(res => setMovies(res.results));
  };
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {moviesChecker ? (
        <SearchMoviesList movies={movies} />
      ) : (
        <h2 style={{ fontSize: '20px', color: '#FFF', marginLeft: '1rem' }}>
          Nothing found ... try again
        </h2>
      )}
    </div>
  );
};

export default Movies;
