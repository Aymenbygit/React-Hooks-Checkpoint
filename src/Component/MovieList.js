import React from 'react';
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

const MovieList = (props) => {
    return (
        <div>
            {props.movies.map((el) => (
                <div className="movies_list" >
            <Card style={{ width: '18rem' }} className="mov_card">
            <Card.Img variant="top" src={el.posterUrl} style={{width:"100%"}} />
            <Card.Body>
                <Card.Title>{el.title} </Card.Title>
                <Card.Text>{el.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <StarRatingComponent value={el.rate}/>
            </Card.Body>
        </Card>
        </div>
        ))}
        </div>
    );
};

export default MovieList;
