import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spotify from './components/Spotify';
import Tweets from './components/Tweets';
import Omdb from './components/omdb';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Omdb />} />
        <Route path="/Spotify" element={<Spotify />} />
        <Route path="/Tweets" element={<Tweets />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
