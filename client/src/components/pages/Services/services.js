import React, { useState } from "react";
import { ServiceCard } from './serviceCard';
import services from '../../../services.json';
import { Col, Row, Container } from 'react-bootstrap';
// import ProfilePic from '../../assets/images/profilePic01.jpg';
// import Resume from '../../assets/resume/resumeMkIII.pdf';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Services() {
    const [serviceList, setServiceList] = useState(services);
    return (
        <div className='servicesSection' id='services'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='servicesHeader'>
                            <h1><b>What We Do</b></h1>
                            <br />
                            <p> We support small businesses and educational institutions through professional virtual services that give them the freedom to focus on running their business.
                        </p>
                            <br />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {serviceList && serviceList.map(element => {
                        return (
                            <ServiceCard key={element.id} service={element} />
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Services;
