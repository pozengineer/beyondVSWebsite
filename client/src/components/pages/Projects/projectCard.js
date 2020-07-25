import React, { useState } from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from './projectModal';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ProjectCard = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={12} md={4} className='projectColumn'>
            <Card>
                <Card.Img variant="top" src={props.project.image} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{props.project.name}</Card.Title>
                    <Card.Text>
                        {props.project.description}
                    </Card.Text>
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            {props.project.name}
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            {...props}
                        />
                    </>
                </Card.Body>
            </Card>
        </Col>
    );
}
