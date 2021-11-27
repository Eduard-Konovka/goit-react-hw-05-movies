import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { apiService } from '../../services/api-service';
import PageHeading from '../../components/PageHeading/PageHeading';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    apiService.fetchArticles('day').then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
