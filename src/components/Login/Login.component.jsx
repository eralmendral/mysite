import React, { useState , useCallback, useContext } from "react";
import ParticleEffect from "../Home/Particles.component";
import { Form, Button } from "react-bootstrap";
import { Link, withRouter , Redirect} from 'react-router-dom';
import { AuthContext} from '../../context/Auth';
import { firebaseApp } from '../../config/fbConfig';
import { toast } from "react-toastify";

const LoginComponent = ({ history }) => {
  const [email, setEmail] = useState("eralmendral@gmail.com");
  const [password, setPassword] = useState();

  const handleLogin = useCallback(async event => {
      event.preventDefault();
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
        history.push('/dashboard')
      }
      catch(error) {
        let errorMessage;
        if(error.code === 'auth/wrong-password') errorMessage = 'Invalid Password.';
        if(error.code === 'auth/user-not-found') errorMessage = 'User not found.';
        toast.error(errorMessage, { closeButton: false ,  hideProgressBar: true });
      }
  }, [ email, password, history ])

  const { currentUser } = useContext(AuthContext);
  if(currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <div className="landing login-page">
      <Link to="/"> <b className="text-white homelink" aria-hidden="true">home</b></Link>
        <ParticleEffect />
        <div className="form-wrapper w-100 d-flex align-items-center justify-content-center text-white">
          <div className="form">
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="rounded-0 border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </Form.Group>

              <Button
                className="rounded-0 d-block theme-default-btn "
                type="submit"
                disabled={!password || !email ? true : false}
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginComponent);
