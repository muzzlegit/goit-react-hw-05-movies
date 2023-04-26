//COMPONENTS
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const films = [
    { id: 'film-1', name: 'avatar' },
    { id: 'film-2', name: 'terminator' },
    { id: 'film-3', name: 'rembo' },
  ];
  return (
    <div>
      <MoviesList movies={films} />
    </div>
  );
};

export default Home;
