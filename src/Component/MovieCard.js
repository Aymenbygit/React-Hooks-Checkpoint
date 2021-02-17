import React from 'react';
import {Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import MovieDescription from "./MovieDescription";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <Card style={{ width: '14rem' }} className="mov_card">
            <Card.Img variant="top" src={movie.posteUrl} style={{width:"100%"}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={movie.rate}
               />
                </Card.Text>
                    <Link to={`/moviedescription/${movie.id}`} >Click to show more details</Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard