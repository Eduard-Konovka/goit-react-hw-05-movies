import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { apiService } from '../../services/api-service';
import PageHeading from '../../components/PageHeading/PageHeading';

export default function HomePage() {
  const { pathname } = useLocation();
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
              <Link
                to={`movies/${movie.id}`}
                state={{ from: { pathname, label: 'Go to Home' } }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
