import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HowItWorks() {
    return (
        <div className='howItWorksSection'>
            <Container className='howItWorksContainer'>
                <Row>
                    <Col sm={12} md={12}>
                        <h1><b>How It Works</b></h1>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={{offset:4,span:8}} className='howItWorksImage01'>
                        <Container>
                            <Row>
                                <Col sm={8} className='howItWorksText01'>
                                    <h3>Tell Us About Your Business</h3>
                                    <p> Tell us about what you need, as well as the operational challenges you face.
                                    </p>
                                    <h3>Get a Tailored Solution</h3>
                                    <p> We create a tailored solution to help you not only overcome operational challenges, but to take you beyond all expectations.  
                                    </p>
                                    <h3>Streamline Your Operations</h3>
                                    <p> You gain access to a team of experts to help you improve efficiency, provide higher levels of service and better manage your business.  
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} className='howItWorksImage02'>
                        <Container>
                            <Row>
                                <Col sm={12} className='howItWorksText02'>
                                    <h1><b>Why Choose Us</b></h1>
                                    <br />
                                    <h3>Experienced Professionals</h3>
                                    <p> With 15 years’ experience across various administration, project management, IT, and financial roles, our team has the skills and knowledge your business needs.
                                    </p>
                                    <h3>Custom Solutions</h3>
                                    <p> We take the time to understand your business, so we can provide a completely tailored solution.  
                                    </p>
                                    <h3>Flexible Options</h3>
                                    <p> Whether it’s a single service or a complete solution, we offer flexible options to suit any business.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HowItWorks;
