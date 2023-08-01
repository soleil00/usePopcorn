import { useState } from "react";
import { MovieList } from "./list-box-component/MovieList";

export function ListBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  // const [movies, setMovies] = useState(tempMovieData)

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
}

// line 6 state was moved to app component and passed as props
//since there is some comp that need to access that state
