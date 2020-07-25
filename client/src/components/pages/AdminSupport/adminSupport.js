import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AdminSupport() {
    const adminArray = [
        'Inbox Management', 'Customer Relationship Management', 'Calendar Management', 'Appointment Scheduling & Reminders', 'Travel Research & Coordination', 'Date Entry & Record Management', 'Formatting', 'Online Course Development & Management', 'Policy & Process Management', 'Recruitment Process Support', 'Market Research & Branding', 'Event Management'
    ];
    return (
        <div className='adminSupportSection' id='administrationSupport'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={8} className='adminSupportDiv01'>
                        <div>
                            <h1 className='adminSupportHeader01'>Administration Support</h1>
                            <p className='adminSupportText01'> If you feel overwhelmed by the amount of administration you
                            encounter on a daily basis, you’re not alone. Our Administration
                            Support services will shift your focus from time-consuming
                            day-to-day tasks to focusing on running your business.
                            Our virtual assistants are there to support your business in an
                            efficient and professional way, ensuring that they consistently
                            provide the highest level of service. They’ll help you expertly
                            manage anything from customer enquiries in your inbox and
                            recruiting staff, to your daily calendar, travel plans, events, and more.
                            Our Administrational Support services cover a range of operational
                            tasks, including customer interaction, data management, human
                            resources, travel and time management, events, and marketing.
                            Our team of virtual assistants is highly skilled, efficient and
                            organised, ensuring that they stay on top of your daily administrational
                            tasks, so you can focus on other critical parts of your business.
                            Whether you need comprehensive administrational support, or you
                            just need help with one aspect, we can provide a tailored solution that
                            meets your needs. We’ll take the time to get to know your business,
                            so we can offer the right solution.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className='adminSupportDiv02'>
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

export default AdminSupport;
