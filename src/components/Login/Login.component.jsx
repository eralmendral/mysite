import React, { useState } from "react";
import ParticleEffect from "../Home/Particles.component";
import { Form, Button } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom';
const LoginComponent = (props) => {
  const [email, setEmail] = useState("eralmendral@gmail.com");
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email + pass:", email, password);
    props.history.push('/dashboard')
  };

  return (
    <div>
      <div className="landing">
      <Link to="/"> <i class="fa fa-arrow-left fa-2x text-white homelink" aria-hidden="true"></i></Link>
        <ParticleEffect />
        <div className="form-wrapper w-100 d-flex align-items-center justify-content-center text-white">
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="rounded-0 border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="rounded-0 border-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                className="theme-default border-0 rounded-0 d-block btn-default"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginComponent);
