import { Link } from "react-router-dom";

function Movie({movie}) {
    return <div>
    <img src={movie.medium_cover_image} alt={movie.title} />
    <h2>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </h2>
    <p>{movie.description_full}</p>
    <ul>
      {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
    </ul>
  </div>;
}

export default Movie;