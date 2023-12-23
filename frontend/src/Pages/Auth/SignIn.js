import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { default as axios } from 'axios';
import { useState, useRef } from 'react';

export default function SignIn() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [show, setShow] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    
    function submitSignInForm(e) {
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

        axios.post('/auth/sign-in', {
                email: emailInput.current.value,
                password: passwordInput.current.value,
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
            <Col md="4" className="mx-auto screen-container">
                <h3 className="mb-2 text-center">Sign In</h3>

                {
                    message &&
                    <Alert variant={messageType} onClose={() => setShow(false)} show={show} dismissible>
                        {message}
                    </Alert>
                }

                <Card className="mt-5">
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={submitSignInForm}>
                            <Form.Group controlId="formGridEmail" className="mb-4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={emailInput} required />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className="my-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" ref={passwordInput} required />
                            </Form.Group>

                            <a href="/sign-up" className="d-block link-primary link-underline-primary mt-5 mb-4 fs-6">
                                Don't have account yet , register !
                            </a>

                            <Button variant="primary" type="submit" className="w-100" disabled={submitDisabled}>
                                Let me in
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
