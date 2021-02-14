import './App.css';
import React, {useState} from 'react';
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import { v4 as uuidv4} from 'uuid';
import Filter from './Component/Filter';
import { Link, Route, Router } from 'react-router-dom';
import MovieDescription from "./Component/MovieDescription";
import Routes from "./routes";


const App = () => {
  const [movies,setMovies] = useState([
    { 
      id : uuidv4(),
      title:'Peaky blinders',
      description:'Serie britannique : crime, drama',
      posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
      rate: 5,
      trailerURL : "https://www.youtube.com/watch?v=oVzVdvGIC7U"
    },
    { 
      id : uuidv4(),
      title:'Narcos',
      description:'Serie américaine : crime, dramatique, policière, biographie' ,  
      posteUrl:'https://fr.web.img6.acsta.net/pictures/15/07/29/14/33/086520.jpg',
      rate: 4,
      trailerURL : "https://www.youtube.com/watch?v=xl8zdCY-abw"
    },
    { 
      id : uuidv4(),
      title:'Breaking Bad',
      description:'Serie américaine : Drame,Policier, Thriller,Comédie',  
      posteUrl:'https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg',
      rate: 5,
      trailerURL : "https://www.youtube.com/watch?v=HhesaQXLuRY"
    },
    { 
      id : uuidv4(),
      title:'Prison Break',
      description:'Serie américaine :crime, dramatique, policière' ,  
      posteUrl:'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
      rate: 5,
      trailerURL : "https://www.youtube.com/watch?v=AL9zLctDJaU"
    },
    ]);
    console.log(movies)
 
    const [filterRate, setFilterRate] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    const search = (inputValue) =>{
      setSearchValue(inputValue);
    }

    const addNewMovie =(movie) =>{
      setMovies(movies.concat(movie));
    }
 
  return (
    <div className="App">
      {/* <Navbar text="Movie App"/>
       <Filter filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>
      <MovieList movies ={movies.filter((movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase()))}
       addNewMovie={addNewMovie}/>
      <Footer/> */}
      <Routes/>
    </div>
  );
}

export default App ;