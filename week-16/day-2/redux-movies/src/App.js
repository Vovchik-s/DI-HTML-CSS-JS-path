import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
        <MovieDetails />
      </header>
    </div>
  );
}

export default App;
