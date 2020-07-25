import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Landing() {
    return (
        <div className='landingSection'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={12}>
                        <div className='box01'>
                            <h1> Efficient Virtual Services
                            </h1>
                            <h1> for Small Businesses &#38; Educational Institutions
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row className='row02'>
                    <Col sm={12} md={4}>
                        <div className='box02'>
                            <p> Improve Efficiency
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='box02'>
                            <p> Save Time &#38; Money
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='box02'>
                            <p> Focus on your Business
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;
