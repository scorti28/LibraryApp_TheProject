import { Button, Col, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainScreen from "../MainScreen";
import "./Register.css";
import ErrorMessage from "../ErrorMessage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

 const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const submitHandler = async (e) => {
        e.preventDefault();

        if(password!==confirmpassword){
            setMessage('Passwords do not match');
        }else{

            setMessage(null)
            try {
                const config = {
                    headers: {
                        //"Content-type": "application/json",
                    },
                };

                setLoading(true);
                const { data } = await axios.post(
                    "/api/users", {
                      name, email, password, telephoneNumber,
                  }, config);

                  console.log(data);
                  setLoading(false);
                  localStorage.setItem("userInfo", JSON.stringify(data));

            } catch (error) {
                setError(error.response.data.message);
            }
        }
            
        
    };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{ error }</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{ message }</ErrorMessage>} 
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="name"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            />

            </Form.Group>
          <Form.Group controlId="formBasicTelephoneNumber">
          <Form.Label>Phone</Form.Label>
            <Form.Control
            type="telephoneNumber"
            value={telephoneNumber}
            placeholder="Enter phone number"
            onChange={(e) => setTelephoneNumber(e.target.value)}
            />

          </Form.Group>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            />

          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            type="password"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
          Have an account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterForm
