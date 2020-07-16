import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import MyModal1 from './MyModal1';


export class NewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onClickNewButton = () => {
    console.log("Clicked onClickNewButton.");
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    console.log("Clicked handleClose.");
    this.setState({
      show: false
    })

  }

  render() {
    let Modal1 = <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
    </Button>
        <Button variant="primary" onClick={this.handleClose}>
          Save Changes
    </Button>
      </Modal.Footer>
    </Modal>

    return (
      <div>
        <Dropdown as={ButtonGroup}>
          <Button variant="success" onClick={this.onClickNewButton} >New</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/action-1">New thing 1</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/action-2">New thing 2</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to="/action-3">New thing 3</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {Modal1}


      </div>
    )
  }
}