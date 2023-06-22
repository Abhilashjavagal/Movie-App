import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetMoviesQuery } from './moviesApi';
import "../App.scss";
import Header from './Header';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



function MovieListPage() {

    const [searchTerm, setSearchTerm] = useState(''); // Initialize searchTerm as empty string
    const { data: movies, isLoading, isError } = useGetMoviesQuery(searchTerm);
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false)

    const handleAddToCart = (movie) => {
        const isMovieInCart = cartItems.some((item) => item.imdbID === movie.imdbID);
       console.log(isMovieInCart)

        if (!isMovieInCart) {
            setCartItems((prevItems) => [
                ...prevItems,
                { ...movie, cartItemId: generateCartItemId() },
            ]);
        }
        setIsModalOpen(true);
    };

    const disable = (movie) => {
       return cartItems.some((item) => item.imdbID === movie.imdbID);
    }

    const handleRemoveFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.cartItemId !== itemId)
        );
    };

    const generateCartItemId = () => {
        return `${Date.now()}-${Math.random()}`;
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        setSearchTerm(generateRandomSearchTerm()); // Set the default search term to a random value
    }, []);

    const generateRandomSearchTerm = () => {
        const searchTerms = ['spy', 'action', 'comedy', 'drama']; // Array of predefined search terms
        const randomIndex = Math.floor(Math.random() * searchTerms.length);
        return searchTerms[randomIndex];
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
    };

    if (isLoading) {
        return <div>Loading movies...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching movies.</div>;
    }

    return (
        <div class="list">
            <form onSubmit={handleSearch} class="search">
                <input type="text" name="search" class="input" placeholder="Search movies..." />
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
            {movies && movies.Search && movies.Search.length > 0 ? (
                <div className="movie-list">
                    {movies.Search.map((movie) => (
                        <div key={movie.imdbID} className="movie-card">
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <p>Year: {movie.Year}</p>
                            <Button
                                type="button" color='green'
                                onClick={() => handleAddToCart(movie)}
                                disabled ={disable(movie)}

                            >{
                                    disable(movie)?'Added':'Add to Cart'
                                }
                            </Button>
                            <Link to={`/movies/${movie.imdbID}`} class="view">View Details</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No movies found.</div>
            )}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                closeIcon
                size="small"
            >
                <Modal.Header>Cart Items</Modal.Header>
                <Modal.Content>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.cartItemId} className='p-2'>
                                    {item.Title}

                                    <i class="fa fa-trash remove" aria-hidden="true" onClick={() => handleRemoveFromCart(item.cartItemId)}></i>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No items in the cart.</p>
                    )}
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={handleCloseModal}  color='red' >Close</Button>
                </Modal.Actions>
            </Modal>
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div >

    );
}

export default MovieListPage;
