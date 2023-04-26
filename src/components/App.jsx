import { Route, Routes } from 'react-router-dom';
//COMPONENTS
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<>cast</>} />
          <Route path="reviews" element={<>reviews</>} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;
