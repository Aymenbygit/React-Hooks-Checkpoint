import React from 'react';
import {  } from "module";
import Iframe from 'react-iframe'
import {Card} from 'react-bootstrap';

const MovieDescription = (props) => {
  const {movies} = props;
    return (
    <div className="DescriptionDiv">
          {movies.filter((el) => el.id === props.match.params.id)
          .map((Movie, i) => (  
            <div key={i} className="MovieDetail"  > 
              <Card className="text-white" style={{backgroundColor:'#282c34', textAlign:'center'}}>
                <Card.Title> <h1 style={{fontSize:'30px',color:'#E0A800'}}>{Movie.title}</h1> </Card.Title>
                <Card.Text> <p style={{fontSize:'20px',color:'#E0A800', textAlign:'left'}} >Movie Description : <span style={{color:'white', textAlign:'center'}}>{Movie.description}</span> </p> </Card.Text>
                <Iframe className="my_iframe"  width="560" height="315" src={Movie.trailerURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
              </Card>
            </div>
          ))  
          }
    </div>
  ) 
}
export default MovieDescription ;