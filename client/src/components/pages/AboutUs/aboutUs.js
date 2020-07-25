import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import AboutUsImage from '../../assets/images/about us page_1293066442.jpg';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AboutUs() {
    return (
        <div className='aboutUsSection' id='aboutUs'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={12}>
                        <div>
                            <img src={AboutUsImage} alt="aboutUs" className="aboutUsImage" />
                            <div className='aboutUsText'>
                                <h1><b>About Us</b></h1>
                                <p> Beyond Virtual Business Services was created to provide a complete solution to small businesses and educational institutions within the greater Sydney area. The Beyond team understands that a lack of resources, skills or time can greatly affect both the operations and the growth of a business. That’s why we’re keen to bring our diverse skills and knowledge to market to help both small businesses and colleges in Sydney run more efficiently and effectively. 
                                </p>
                                <br />
                                <p> Our team has spent the last few decades honing their skills in a range of roles and industries across business administration, financial management, project management and IT within the education, investment, advertising, not-for-profit, software development, and IT solutions industries.
                                </p>
                                <br />
                                <p> We’ve come together to create a one-stop-shop for small businesses and educational institutions, to give them the opportunity to focus on the critical elements of their business, rather than the time-consuming daily tasks.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
