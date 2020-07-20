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

  onClickNew = () => {
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
    return (
      <div>
        <Dropdown as={ButtonGroup}>
          <Button variant="success" onClick={this.onClickNew} >New</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/action-1">New thing 1</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/action-2">New thing 2</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link to="/action-3">New thing 3</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <MyModal1 show={this.state.show} onHide={this.handleClose} />
        {/* <MyModal2 />
        <MyModal3 /> */}



      </div>
    )
  }
}