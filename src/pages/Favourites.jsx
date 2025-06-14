import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favourites.css";

function Favourites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No fav movies yet</h2>
        <p>Start adding your favourites here and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favourite Movies</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
