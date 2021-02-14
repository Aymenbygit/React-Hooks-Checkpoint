import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDescription from "./Component/MovieDescription";
import MovieCard from "./Component/MovieCard";


const Routes = () => {

    return (
        <Router>
        <Switch>
            <Route path="/" exact component={MovieCard}/>
            <Route path="/moviedescription/:id" exact component={MovieDescription}/>
            {/* <Route {...props} restricted={false} component={Notfound}/> */}
        </Switch>
        </Router> 
    )
    
}

export default Routes;
