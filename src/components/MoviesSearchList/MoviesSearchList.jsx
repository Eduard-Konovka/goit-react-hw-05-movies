import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { apiService } from 'services/api-service';

export default function MoviesSearchList({ search }) {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }

    apiService.searchQuery = search;
    apiService.fetchArticles('search').then(data => setMovies(data));
  }, [search]);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`${movie.id}`}
            state={{ from: location, label: 'Go to Search' }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
