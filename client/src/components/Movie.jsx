import React from 'react'

class Movie extends React.Component {
  render () {
    return(
      <tr>
        <td><a href="http://www.google.com"> <img src="https://png.icons8.com/plus/win8/1600" alt="plus" width="40"/></a></td>
        <td className="movieTitle">{this.props.title}</td>
        <td>{<a className = "showTimes" href="http://www.google.com">Showtimes</a>}</td>
      </tr>
    );
  }
}

export default Movie;