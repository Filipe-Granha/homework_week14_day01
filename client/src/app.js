import React from 'react';
import ReactDOM from 'react-dom';
import MovieBox from './containers/MovieBox.jsx';

window.onload = function(){
  ReactDOM.render(
    <MovieBox/>,
    document.getElementById('app')
  );
}
 