import React from 'react';
import { Movies, movies } from '../copmonets/Movies';
import { Palets } from '../copmonets/Palets';
import { Preloader } from '../copmonets/Preloader';
import { Search } from '../copmonets/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=7bb00b8e&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=7bb00b8e&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };


  render() {
    const { movies } = this.state;

    return (
      <main className="conteiner content">
        <Search searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
        {movies.length ? <Palets /> : <Preloader />}
      </main>
    );
  }
}

export { Main };

