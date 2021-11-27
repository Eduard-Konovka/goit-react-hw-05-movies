import errorImage from './error.jpg';

export default function NotFoundView({ messadge }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="Error 404" />
      <p>{messadge}</p>
    </div>
  );
}
