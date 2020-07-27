import React from 'react';
import './style.css';
import SearchMovies from './searchMovie';

function App() {
  return (
    <div className="container">
      <h1>React Hooks Movie search App</h1>
      <SearchMovies />
    </div>
  );
}

export default App;


//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit
