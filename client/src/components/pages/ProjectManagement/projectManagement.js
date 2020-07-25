import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ProjectManagement() {
    const adminArray = [
        'Team Lead & Coordination','Timeline Management','Budget Tracking'
    ];
    return (
        <div className='adminSupportSection' id='projectManagement'>
            <Container className='container'>
                <Row>
                    <Col sm={12} md={8} className='adminSupportDiv01'>
                        <div>
                            <h1 className='adminSupportHeader01'>Project Management</h1>
                            <p className='adminSupportText01'> We provide expert Project Management services to help you complete every project, on time and on budget. We understand that a lack of resources, knowledge or skills can greatly affect how and when a
                            project is delivered. That’s why we utilise our expertise to help
                            small businesses and colleges in Sydney to efficiently manage
                            projects, and deliver as expected.
                            <br />
                            The Beyond team has vast experience managing the critical elements required to successfully deliver a project, including leading and
                            coordinating teams, timeline management and budget tracking. We’ll ensure that project teams are properly coordinated and supported
                            by leading in a professional way, while utilising the latest technology
                            to aid team communication. We’ll effectively manage the timeline
                            of your project to ensure that every phase is completed as scheduled, minimising delays and interruptions. Plus, our budget tracking services
                            will ensure that your project’s budget is meticulously managed, and administered.
                            <br />
                            Our services can be tailored to your needs, regardless of the size or
                            budget of your project.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className='projectManagementDiv02'>
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

export default ProjectManagement;
