import React, {Component} from 'react';
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends Component {
  render () {
    return (
      <>
        <Card style={{ width: '18rem' }} className="mov_card ">
            <Card.Img variant="top" src="https://fr.web.img6.acsta.net/pictures/19/03/21/17/05/1927893.jpg" style={{width:"100%"}} />
            <Card.Body>
                <Card.Title>GOT</Card.Title>
                <Card.Text>2010</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>posterUrl</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <StarRatingComponent/>
            </Card.Body>
        </Card>
      </>
    )
  }
}
  
  export default MovieCard;