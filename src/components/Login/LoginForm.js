import { useEffect, useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";
import "./Login.css";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = "http://localhost:5000";

const LoginForm = ({history}) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();
   const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const config = {
        headers: {
          //"Content-type":"application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login", {
          email,password
      }, config);

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
    }
    navigate('/');

   };


 
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{ error }</ErrorMessage>}
        <Form onSubmit={submitHandler}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
          New Customer ? <Link to="/Register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginForm
