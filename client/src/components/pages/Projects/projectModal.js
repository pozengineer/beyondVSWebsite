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
                    {props.project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img variant="top" src={props.project.image} />
                <h4>Centered Modal</h4>
                <p>
                    {props.project.description}
                </p>
                <Button href={props.project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
