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
                    <ul class = "movie-misc-info">
                     <li class = "year">Year: {movie.Year}</li>
                     <li class = "ratings">Ratings: {movie.imdRating}</li>
                     <li class = "released">Released: {movie.Released}</li>
					 <li class = "Language">Language: {movie.Language}</li>
                </ul>

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
