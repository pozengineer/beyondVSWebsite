import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WebDevelopment() {
    const adminArray = [
        'Website Design & Development','Website Management','Website Template Design','Mobile App Design'
    ];
    return (
        <div className='adminSupportSection' id='webDevelopment'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={8} className='adminSupportDiv01'>
                        <div>
                            <h1 className='adminSupportHeader01'>Web Development</h1>
                            <p className='adminSupportText01'> Having an online presence is key in today’s digital world. We’ll help you create a website or app that both engages your audience, and converts browsers into customers. Our IT experts will look after the entire
                            process for you, so you don’t have to do a thing. Leave it to them to
                            design, develop and create a digital solution that’s both functional and visually appealing.
                            <br />
                            From designing and creating a website or mobile app to illustration and template design, our IT experts will work closely with you to create a solution that works for you.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className='webDevelopmentDiv02'>
                        <div>
                            <h1 className='adminSupportHeader02'>Services include:</h1>
                            <ul>
                                {adminArray && adminArray.map((element, i) => {
                                    return (
                                        <li className='adminSupportList' key={i}>{'\u2022'} {element}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WebDevelopment;
