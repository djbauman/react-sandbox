import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyModal3(props) {
  return (
    <Modal
      {...props}
      dialogClassName="modal-header"
      aria-labelledby="my-class"
      centered
    >
      <Modal.Header closeButton> {/* closeButton optional here */}
        <Modal.Title id="contained-modal-title-vcenter">
          Modal 3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="button-custom-class">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyModal3;