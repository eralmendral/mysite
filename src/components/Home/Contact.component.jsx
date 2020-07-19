import React from 'react'
import './assets/css/contact.scss';
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

const ContactComponent  = () => (
    <div className="contact">
        <h3 className="text-center mt-5 mb-4 sectionTitle">Contact</h3>
        <div className="contact-info">
            <ul>
                <li>+639751321678</li>
                <li>ealmendral@gmail.com</li>
                <li>fb.com/arquiasdf</li>
            </ul>
        </div>

        <div className="contact-me mt-5">
            
        <Container>
            <Form>
                <Row>
                    <Col xs={12} sm={6}>
                        <Form.Group className="mx-1" controlId="clientName">
                                <Form.Control className="contactfield" type="text" placeholder="Enter Name" />
                        </Form.Group>
                    </Col>

                    <Col xs={12} sm={6}>
                        <Form.Group className="mx-1 rounded-0" controlId="clientEmail">
                            <Form.Control className="contactfield" type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Col>
                </Row>
                

                <Row>
                    <Col sm={12}>
                        <Form.Group controlId="clientMessage">
                            <Form.Control className="contactfield"  as="textarea" rows="5" placeholder="Enter Message"/>
                        </Form.Group>
                    </Col>
                </Row>

                    <Button className="contactSubmit"  type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
        </div>
    </div>
)

export default ContactComponent;