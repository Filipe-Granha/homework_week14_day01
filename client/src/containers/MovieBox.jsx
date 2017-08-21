import React from 'react'
import MoviesTable from "../components/MoviesTable.jsx"


const moviesSample = [
  {id: 1, title: "Sausage Party"},
  {id: 2, title: "Café Society"},
  {id: 3, title: "Morgan"},
  {id: 4, title: "The 9th Life of Louis Drax"},
  {id: 5, title: "Naam Hai Hakira"},
  {id: 6, title: "Equity"},
  {id: 7, title: "Things to Come"}
];


class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: moviesSample
    }
  }

  render() {
    return (
      <div className = "MovieBox">
        <p className="title">UK Opening This Week</p>  
        <MoviesTable data = {this.state.data} />
        <a className = "opening" href="http://www.google.com">See more opening this week >></a>
        <div>
          <form method="get" action="http://www.google.com">
          <button className = "button" type="submit">Get Showtimes >></button>
          </form>
        </div>
      </div>
    )
  }
}

export default MovieBox;