import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Fav from './favourite';
class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie = id => {
    const { movies } = this.state;
    const filterMovies = movies.filter(movie => movie._id !== id);
    this.setState({
      movies: filterMovies
    });
  };
    handleLikeMovie = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });        
    }
  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <p>No movies found in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                          <Fav onLike={this.handleLikeMovie} movie={movie} />
                  </td>

                  <td>
                    {' '}
                    <button
                      onClick={() => this.handleDeleteMovie(movie._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
