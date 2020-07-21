import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import MyModal1 from './MyModal1';
import MyModal2 from './MyModal2';
import MyModal3 from './MyModal3';

export class NewButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_m1: false,
      show_m2: false,
      show_m3: false
    };
  }

  // TODO: Learn why => () is different from normal function.
  onClickNew = (i) => {
    var obj = {}
    var key = "show_m" + i
    obj[key] = true;
    this.setState(obj);
  }

  handleClose(i) {
    console.log("Clicked handleClose...");
    console.log("i is: " + i);
    var obj = {}
    var key = "show_m" + i
    obj[key] = false;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <Dropdown as={ButtonGroup}>
          <Button variant="success" onClick={() => this.onClickNew(1)} >New</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item><Link onClick={() => this.onClickNew(1)}>New thing 1</Link></Dropdown.Item>
            <Dropdown.Item><Link onClick={() => this.onClickNew(2)}>New thing 2</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link onClick={() => this.onClickNew(3)}>New thing 3</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <MyModal1 show_m1={this.state.show_m1} handleClose={() => this.handleClose(1)} />
        <MyModal2 show_m2={this.state.show_m2} handleClose={() => this.handleClose(2)} />
        <MyModal3 show_m3={this.state.show_m3} handleClose={() => this.handleClose(3)} />
        

      </div>
    )
  }
}