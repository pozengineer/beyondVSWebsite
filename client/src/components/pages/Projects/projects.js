import React, { useState }from "react";
import { ProjectCard } from './projectCard';
import projects from '../../../projects.json';
import { Col, Row, Container } from 'react-bootstrap';
// import ProfilePic from '../../assets/images/profilePic01.jpg';
// import Resume from '../../assets/resume/resumeMkIII.pdf';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Projects() {
    const [projectList, setProjectList] = useState(projects);
    return (
        <Container>
            <Row>
                <Col md={12} >
                    <h1><b>Projects</b></h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                {projectList && projectList.map(element => {
                    return (
                        <ProjectCard key={element.id} project={element} />
                    )
                })}
            </Row>
        </Container>
    );
}

export default Projects;
