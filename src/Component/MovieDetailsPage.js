import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from './moviesApi';
import "../App.scss";

function MovieDetailsPage() {
    const { imdbID } = useParams();
    const { data: movie, isLoading, isError } = useGetMovieByIdQuery(imdbID);

    if (isLoading) {
        return <div>Loading movie details...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching movie details.</div>;
    }

    if (!movie) {
        return <div>Invalid movie data.</div>;
    }

    return (
        <div class="details">
        <div class="row">
            <div class="col-4 mt-4">
                <img src={movie.Poster} />

            </div>
            <div class="col-8 align-self-center">
                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
                <p>Released: {movie.Released}</p>
                <p>Director: {movie.Director}</p>
                <p>Director:{movie.Director}</p>
                <p>Actors:{movie.Actors}</p>
                <p>Genre:{movie.Genre}</p>
                <p>Language:{movie.Language}</p>
                <p>Awards:{movie.Awards}</p>

            </div >
        </div >
        </div>
    );
}

export default MovieDetailsPage;
