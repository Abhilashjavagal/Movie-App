import React from 'react';
import { Link } from 'react-router-dom';
import "./App.scss";

function MovieCard({ movie }) {


    return (
        <Link to={`/movies/${movie.imdbID}`} className="movie-card">
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-plot">{movie.Plot}</p>
            <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        </Link>
    );
}

export default MovieCard;
