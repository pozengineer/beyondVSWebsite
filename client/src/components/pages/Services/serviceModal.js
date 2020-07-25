import React from "react";
import { Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MyVerticallyCenteredModal = (props) => {

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.service.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img variant="top" src={props.service.image} />
                <h4>Centered Modal</h4>
                <p>
                    {props.service.description}
                </p>
                <Button href={props.service.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
