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
        <Modal show={this.props.show_m2} onHide={this.props.onHide} dialogClassName="modal-header">
          <Modal.Header>
            <Modal.Title>Modal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            This is Modal 2.
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
            <Button variant="primary" onClick={this.props.onHide}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}