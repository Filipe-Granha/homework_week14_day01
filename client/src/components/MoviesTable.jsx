import React from 'react'
import Movie from './Movie.jsx'



class MoviesTable extends React.Component {
  render() {
    
    const eachMovie = this.props.data.map(function(movie) {
      return (
        <Movie key = { movie.id } title = { movie.title }></Movie>
      )
    });

    return (
      <table className="table">
        <tbody>{eachMovie}</tbody>
      </table>
    )
  }
}

export default MoviesTable;