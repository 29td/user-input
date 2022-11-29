import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spotify from './components/Spotify/Spotify';
import Tweets from './components/Tweets/Tweets';
// import MovieList from './components/OMDBAPI/Omdb';
import Omdb from './components/OMDBAPI/Omdb';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tweets />} />
        <Route path="/Spotify" element={<Spotify />} />
        <Route path="/Omdb" element={<Omdb />} />
      </Routes>
    </>
  );
}

export default App;
