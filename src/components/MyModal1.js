import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Modal show={this.props.show_m1} handleClose={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
        </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.props.handleClose}> */}
            <Button variant="secondary" onClick={this.props.handleClose} >Close</Button>
            <Button variant="primary" onClick={this.props.handleClose}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


// <Modal show={this.state.show} onHide={this.handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal heading</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={this.handleClose}>
//       Close
//     </Button>
//     <Button variant="primary" onClick={this.handleClose}>
//       Save Changes
//     </Button>
//   </Modal.Footer>
// </Modal>