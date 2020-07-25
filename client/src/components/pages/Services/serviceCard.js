import React from "react";
import { Col, Card, Button } from 'react-bootstrap';
// import { MyVerticallyCenteredModal } from './serviceModal';
import { Link } from "react-scroll";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ServiceCard = (props) => {
    // const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={6} md={4} className='serviceColumn'>
            <Card>
                {/* <Card.Img variant="top" src={props.service.image} className='img-fluid' /> */}
                <Card.Body className="serviceCardContent">
                    <Card.Title className="serviceCardTitle">{props.service.name}</Card.Title>
                    <Card.Text className="serviceCardDescription">
                        {props.service.description}
                    </Card.Text>
                    <>
                        <Button variant="primary" className="servicesBtn">
                            <Link
                            className="nav-link"
                            href={props.service.href}
                            activeClass="active"
                            to={props.service.linkName}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >Learn More</Link>
                        </Button>
                    </>
                </Card.Body>
            </Card>
        </Col>
    );
}
