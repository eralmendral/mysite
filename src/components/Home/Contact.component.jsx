import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from_name: "",
      from_email: "",
      message: "",
      to_name: "Eric",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  emailSent = (event) => {
    event.preventDefault();
    const { reply_to, from_name, from_email, message, to_name } = this.state;

    var template_params = {
      reply_to: reply_to,
      from_name: from_name,
      to_name: to_name,
      from_email: from_email,
      message: message,
    };

    const SERVICE_ID = "default_service";
    const TEMPLATE_ID = "template_bn1jrS6X";
    const USER_ID = "user_ku8Ajk2gFZHYQcpNvRls9";
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, template_params, USER_ID)
      .then((res) => {
        toast.success("Email sent, have a good day!", { closeButton: false ,  hideProgressBar: true });
      })
      .catch((err) => {
        toast.error("Email failed to sent!", { closeButton: false ,  hideProgressBar: true });
      });

    this.resetForm();
  };

  resetForm() {
    this.setState({
      from_name: "",
      from_email: "",
      message: "",
      to_name: "Eric",
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="contact">
        <h3 className="text-center mt-5 mb-4 sectionTitle">Contact</h3>
        <div className="contact-info">
          <ul>
            <li>+639751321678</li>
            <li>
              <a href="mailto: ealmendral@gmail.com">ealmendral@gmail.com</a>
            </li>
            <li>
              <a
                href="https://fb.com/arquiasdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                fb.com/arquiasdf
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-me mt-5">
          <Container>
            <Form id="emailForm" onSubmit={this.emailSent}>
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Group className="mx-1" controlId="clientName">
                    <Form.Control
                      className="contactfield"
                      type="text"
                      name="from_name"
                      value={this.state.from_name}
                      onChange={this.handleChange}
                      placeholder="Enter Name"
                      autoComplete='off'
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6}>
                  <Form.Group
                    className="mx-1 rounded-0"
                    controlId="clientEmail"
                  >
                    <Form.Control
                      className="contactfield"
                      type="email"
                      name="from_email"
                      value={this.state.from_email}
                      onChange={this.handleChange}
                      placeholder="Enter Email"
                      autoComplete='off'
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <Form.Group controlId="clientMessage">
                    <Form.Control
                      className="contactfield"
                      as="textarea"
                      rows="5"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      placeholder="Enter Message"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                className="contactSubmit"
                type="submit"
                name="submit"
                disabled={
                  !this.state.from_name ||
                  !this.state.from_email ||
                  !this.validateEmail(this.state.from_email) ||
                  !this.state.message
                }
              >
                Send
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
