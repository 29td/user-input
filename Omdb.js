import React, { useState, useEffect } from 'react';
import MovieList from './MoviesList';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Omdb = () => {
    const [movies, setMovies] = useState([]);

	const getMovieRequest = async (searchTerm) => {
		const url = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};
  
  export default Omdb;
