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

  const searched = searchParams.get('query');

  useEffect(() => {
    if (searched)
      getMoviesByQuery(searched.trim()).then(res => setMovies(res.results));
  }, [searched]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    getMoviesByQuery(query.trim()).then(res => setMovies(res.results));
  };
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <SearchMoviesList movies={movies} />
    </div>
  );
};

export default Movies;
