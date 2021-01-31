import MovieCard from './Component/MovieCard'
import './App.css';
import React, {Component} from 'react';
// import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import MovieList from './Component/MovieList';
import AddMovie from "./Component/AddMovie";



class App extends Component {
   state = {
    movies : [
      {
        title: "Breaking Bad", 
        description: "description", 
        posterUrl:"https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg", 
        rate:"4"
      },
      {
        title: "Narcos", 
        description: "description", 
        posterUrl:"https://fr.web.img6.acsta.net/pictures/15/07/29/14/33/086520.jpg", 
        rate:"5"
      }
    ]
  } 
  add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render () {
    return (
      <div className="App">
        <h2>Movie title</h2>
        <MovieList movies={this.state.movies} />
        <MovieCard/>
        <AddMovie AddMovie={(m)=>this.add(m)} />
      </div>
    );
  }
}

export default App;
