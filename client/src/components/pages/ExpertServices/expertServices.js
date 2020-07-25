import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import ServicesImage from '../../assets/images/Services Page _ Bell__1341753398.jpg';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ExpertServices() {
    return (
        <div className='expertServicesSection' id='expertServices'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={12}>
                        <div>
                            <img src={ServicesImage} alt="expertServices" className="expertServicesImage" />
                            <div className='expertServicesText'>
                                <h1><b>Services</b></h1>
                                <p> Expert virtual business services to help you improve operational efficiency, provide enhanced levels of service, and better manage your organisation.
                                </p>
                                <br />
                                <p> As a Beyond customer, you’ll have a team of seasoned professionals behind you to support your organisation in all aspects of its daily operations.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExpertServices;
