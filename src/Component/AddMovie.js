import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";

class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state= {
            show: false
        }
    }
    handleShow = () => {
        this.setState( {show: !this.state.show })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow} >+</Button>
                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header >
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <div>
                                <label className="input" >Title:</label>
                                <input type="text" name="title" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Description:</label>
                                <input type="text" name="description" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">PosterUrl:</label>
                                <input type="text" name="posterUrl" onChange={this.handleChange}  />
                            </div>
                            <div>
                                <label className="input">Rate:</label>
                                <input type="text" name="rate" onChange={this.handleChange} />
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow} >Close</Button>
                        <Button variant="primary" onClick={(event)=>this.handleChange(event)}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddMovie