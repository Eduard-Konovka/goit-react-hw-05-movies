import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { movieApiService } from '../../services/api-service';
import URL from '../../services/settings-url';
import Loading from '../../components/Loading/Loading';
import Button from 'components/Button/Button';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../../components/Cast/Cast.jsx' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews.jsx' /* webpackChunkName: "Reviews" */
  ),
);

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieApiService.fetchArticles(null, movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from?.pathname ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <Button type="button" forClick={onGoBack}>
            <ImArrowLeft style={{ marginRight: 8, marginBottom: -2 }} />
            {location?.state?.from?.label ?? 'Go Back'}
          </Button>
          <div className={s.box}>
            <img
              src={`${URL.W342_IMG_URL}/${movie.poster_path}`}
              alt={movie.title}
            />

            <div className={s.description}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name + ' ')}</p>
            </div>
          </div>

          <div className={s.additional}>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>

              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Loading timeout={3000} />}>
            <Routes>
              <Route path="/cast" element={movie && <Cast />} />
              <Route path="/reviews" element={movie && <Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
