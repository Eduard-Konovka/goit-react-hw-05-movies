import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { apiService } from '../../services/api-service';
import Button from 'components/Button/Button';

export default function MoviesPage() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search === '') {
      return;
    }

    apiService.searchQuery = search;
    apiService.fetchArticles('search').then(data => setMovies(data));
  }, [search]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearch(input);
        }}
      >
        <input onChange={e => setInput(e.target.value)} />
        <Button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </Button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}