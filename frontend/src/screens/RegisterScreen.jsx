import { Button, Col, Form, Row } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { Link } from "react-router-dom"
import { useState } from "react";

const RegisterScreen = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]= useState('');

    const submitHandler = async (e) =>{
        e.preventDefault();
        console.log('submit');
    }

  return (
    <div>
        <FormContainer>
            <h1>Register</h1>

            <Form onSubmit={submitHandler}>

            <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                            type='text' placeholder="Enter Name" value={name}  onChange={(e)=> setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                            type='email' placeholder="Enter email" value={email}  onChange={(e)=> setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                            type='password' placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                            type='password' placeholder="Enter password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Sign In
                </Button>
                
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer? <Link to={`/login`}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    </div>
  )
}

export default RegisterScreen
