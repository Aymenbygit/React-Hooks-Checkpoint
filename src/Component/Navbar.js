import React, { Component } from 'react';
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';
import MovieDescription from "./MovieDescription";
import { Link, Route } from 'react-router-dom';

export class navbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        src="https://1.bp.blogspot.com/-4s8t0OXkc80/W6uqTV0uR1I/AAAAAAAABpE/rQQcwTTMG9UmAPHFRxorztte0f8bg70JACK4BGAYYCw/s1600/e82b2e42-6761-4d4b-bcc0-29b23b11ccbf.png"
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    </Navbar.Brand>
                    
                    <Nav className="mr-auto">
                    <Nav.Link to="/" >Home</Nav.Link>
                    <Nav.Link to="/tv_show">TV Show</Nav.Link>
                    <Nav.Link to="/movies">Movies</Nav.Link>
                    <Nav.Link to="/my_list">My List</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    </Form> */}
                </Navbar>
            </div>
        )
    }
}

export default navbar
