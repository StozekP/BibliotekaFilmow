import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList/MovieList.jsx'

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setMovies(["Shrek", "Król Lew", "Toy Story"]);
  }, []);

  function dodajFilm() {
    if (title === '') {
      return;
    }
    setMovies([...movies, title]);
    setTitle('');
  }

  return (
    <div className="app">
      <h1>Biblioteczka filmów</h1>
      <p>Filmy do obejrzenia</p>

      <input
        placeholder="Wpisz tytuł filmu..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={dodajFilm}>Dodaj film</button>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
