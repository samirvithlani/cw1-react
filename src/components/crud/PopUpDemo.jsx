
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


export const PopUpDemo = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Open Popup
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Popup Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Popup content goes here */}
              <p>This is the content of the popup.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* Additional buttons or actions */}
            </Modal.Footer>
          </Modal>
        </>
      );
}

