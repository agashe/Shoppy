import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { default as axios } from 'axios';
import { useState, useRef } from 'react';

export default function SignUp() {
    const nameInput = useRef();
    const emailInput = useRef();
    const addressInput = useRef();
    const passwordInput = useRef();
    const confirmInput = useRef();

    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [show, setShow] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    function submitSignUpForm(e) {
        setSubmitDisabled(true);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();

            setValidated(true);
            setSubmitDisabled(false);

            return;
        }
        
        e.preventDefault();

        axios.post('/auth/sign-up', {
                name: nameInput.current.value,
                email: emailInput.current.value,
                address: addressInput.current.value,
                password: passwordInput.current.value,
                confirm: confirmInput.current.value,
            },  { crossDomain: true })
            .then(function (response) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                window.location.href = '/';
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error

                setMessage(error.response.data.message);
                setMessageType('danger');
            })
            .finally(function () {
                setSubmitDisabled(false);
            });
    }

    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                <h3 className="text-center mb-1">Sign Up</h3>
                <p className="text-center">Fill the form below , to register a new account</p>

                {
                    message &&
                    <Alert variant={messageType} onClose={() => setShow(false)} show={show} dismissible>
                        {message}
                    </Alert>
                }

                <Card className="mt-5">
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={submitSignUpForm}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" ref={nameInput} required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" ref={emailInput} required />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" ref={passwordInput} required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridConfirm">
                                    <Form.Label>Confirm</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" ref={confirmInput} required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" ref={addressInput} required />
                            </Form.Group>

                            <Row>
                                <Col className="w-100">
                                    <Button variant="primary" type="submit" className="d-block mx-auto" disabled={submitDisabled}>
                                        Register
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
