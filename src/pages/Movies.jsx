import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';

const Movies = () => {
  const films = [
    { id: 'film-4', name: 'batman' },
    { id: 'film-5', name: "i'm batman" },
    { id: 'film-6', name: 'super batman' },
  ];
  return (
    <div>
      <SearchMoviesList movies={films} />
    </div>
  );
};

export default Movies;
