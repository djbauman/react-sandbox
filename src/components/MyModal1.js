import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModal1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Modal 
          show={this.props.show_m1} 
          onHide={this.props.onHide} 
          backdrop="static" 
          keyboard={false}
          dialogClassName="modal-header">
          <Modal.Header>
            <Modal.Title>Modal 1</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            I will not close if you click outside me. Don't even try to press the escape key.
        </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.props.onHide}> */}
            <Button variant="secondary" onClick={this.props.onHide} >Close</Button>
            <Button variant="primary" onClick={this.props.onHide} >Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


// <Modal show={this.state.show} onHide={this.onHide}>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal heading</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={this.onHide}>
//       Close
//     </Button>
//     <Button variant="primary" onClick={this.onHide}>
//       Save Changes
//     </Button>
//   </Modal.Footer>
// </Modal>