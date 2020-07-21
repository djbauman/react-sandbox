import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModal2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Modal show={this.props.show_m2} handleClose={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is Modal 2.
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
            <Button variant="primary" onClick={this.props.onClick}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}