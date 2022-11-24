import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieList from './MoviesList';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Omdb = () => {
    const [text, setText] = useState("search movies");
	const [movies, setMovies] = useState([]);


	const changeText = (e) => {
		// console.log(e);
		setText(e.target.value)
	}

	const getMovies = (e) => {
		e.preventDefault();
		axios.get(`https://www.omdbapi.com/?s=${text}&apikey=2ea873e7`)
		.then((response)=>{
			console.log(response)
			setMovies(response.data.Search)
		})
	}

	return (
		<>
		<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={getMovies}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div className="container">
	<div className="row">
		{
			movies && movies.map((movie,index) => {
				return (
					<div className="col-3">
		            <div className="card" style={{width: "18rem"}}>
                    <img src={movie.Poster} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h3 className="card-title">{movie.Title}</h3>
                    <p className="card-text">{movie.Year}</p>
                    </div>
                    </div>
		            </div>
				)
			})
		}
	</div>
</div>

		</>
	)
}

export default Omdb;

// const Omdb = () => {
//     const [movies, setMovies] = useState([]);

// 	// const fetchMovies = () => {
		// axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2ea873e7')
// 	// 	.then((response)=>{
// 	// 		console.log(response)
// 	// 		setMovies(response.data.Search)
// 	// 	})
// 	// }

// 	const getMovieRequest = async (searchTerm) => {
// 		const url = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=263d22d8`;
// 		const response = await fetch(`${url}`);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest();
// 	}, []);

// 	return (
// 		<>
// 		<button onClick={getMovieRequest}>Fetch Movies</button>
// 		{
// 			movies.map((movie,index)=>{
// 				return (
// 					<div classNameName='image-container d-flex justify-content-start m-3'>
// 					<img src={movie.Poster} alt='movie'></img>
//                     <div className = "movie-info">
// 					<h3 className = "movie-title" key={index}>{movie.Title}</h3>
// 					<ul className = "movie-misc-info">
//                     <li className = "year" key={index}>Year: {movie.Year}</li>
//                     <li className = "rated" key={index}>Ratings: {movie.Rated}</li>
//                     <li className = "released" key={index}>Released: {movie.Released}</li>
//                 </ul>
//                 <p className = "genre" key={index}><b>Genre:</b> {movie.Genre}</p>
//                 <p className = "writer" key={index}><b>Writer:</b> {movie.Writer}</p>
//                 <p className = "actors" key={index}><b>Actors: </b>{movie.Actors}</p>
//                 <p className = "plot" key={index}><b>Plot:</b> {movie.Plot}</p>
//                 <p className = "language" key={index}><b>Language:</b> {movie.Language}</p>
//                 <p className = "awards" key={index}><b><i className = "fas fa-award"></i></b> {movie.Awards}</p>
//             </div>
//             </div>
// 				);
// 			})
// 		}
// 		</>
// 		// <div classNameName='container-fluid movie-app'>
// 		// 	<div classNameName='row'>
// 		// 		<MovieList movies={movies} />
// 		// 	</div>
// 		// </div>
// 	);
// };
  
//   export default Omdb;
