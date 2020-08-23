import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: '',
            inputEmail: '',
            inputMessage: '',
            errors: {},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        let errors = {};
        event.preventDefault();
        const inputData = {
            inputName: this.state.inputName,
            inputEmail: this.state.inputEmail,
            inputMessage: this.state.inputMessage,
        }
        console.log(inputData);

        const inputform = axios.post('/api/contactForm', {
            inputName: this.state.inputName,
            inputEmail: this.state.inputEmail,
            inputMessage: this.state.inputMessage,
        })
        .then(res => {
            console.log('infoData submitted!');
            this.setState({
                inputName: '',
                inputEmail: '',
                inputMessage: ''
            })
        })
    }

    render() {
        return (
            <div className='contactUsSection' id='contactUs'>
                <Container>
                    <Row>
                        <Col>
                            <h1><b>Contact Us</b></h1>
                        </Col>
                    </Row>
                    <Row>
                        <div className='col-md-6 mt-5'>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='inputName'>Name</label>
                                    <input type='text'
                                        refs='inputName'
                                        className='form-control'
                                        name='inputName'
                                        placeholder='Enter Name'
                                        value={this.state.inputName}
                                        onChange={this.onChange}
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["inputName"]}</span>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='inputEmail'>Email</label>
                                    <input type='email'
                                        refs='inputEmail'
                                        className='form-control'
                                        name='inputEmail'
                                        placeholder='name@example.com'
                                        value={this.state.inputEmail}
                                        onChange={this.onChange}
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["inputEmail"]}</span>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='inputMessage'>Message</label>
                                    <textarea type='text'
                                    refs='inputMessage'
                                    className='form-control'
                                    name='inputMessage'
                                    placeholder='Enter Message'
                                    value={this.state.inputMessage}
                                    onChange={this.onChange}
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["inputMessage"]}</span>
                                </div>

                                <button type='submit' className='btn btn-lg btn-primary btn-block infoBtn'>
                                    Submit
                                </button>
                            </form>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    />
                                </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example Textarea</Form.Label>
                                    <Form.Control
                                    as="textarea"
                                    rows="3"
                                    refs='inputMessage'
                                    className='form-control'
                                    name='inputMessage'
                                    placeholder='Enter Message'
                                    value={this.state.inputMessage}
                                    onChange={this.onChange}
                                    />
                                    <span style={{ color: "red" }}>{this.state.errors["inputMessage"]}</span>
                                </Form.Group>
                            </Form>
                        </div>
                    </Row>
                    <Row>
                        <Col size="md-3">
                            <label onClick={this.scrollToTop} className='returnTop'><i className='fas fa-arrow-circle-up'></i> Back to Top</label>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactUs;
