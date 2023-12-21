import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { default as axios } from 'axios';

export default function Contact() {
    const nameInput = useRef();
    const emailInput = useRef();
    const bodyInput = useRef();

    const [show, setShow] = useState(true);
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

    function submitContactUsForm(e) {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }

        e.preventDefault();

        axios.post('/contact', {
                name: nameInput.current.value,
                email: emailInput.current.value,
                body: bodyInput.current.value
            },  { crossDomain: true, headers: { }})
            .then(function (response) {
                setMessage(response.data.message);
                setMessageType('success');

                // reset form
                nameInput.current.value = ""
                emailInput.current.value = ""
                bodyInput.current.value = ""
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error

                // show error message
                setMessage(error.response.data.message);
                setMessageType('danger');
            });
    }
    
    return (
        <Row>
            <Col md="8" className="mx-auto text-center screen-container">
                <h3 className="mb-1">Contact Us</h3>
                <p>Feel free to send us your message</p>

                {
                    message &&
                    <Alert variant={messageType} onClose={() => setShow(false)} dismissible>
                        {message}
                    </Alert>
                }

                <Card className="mt-5">
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={submitContactUsForm}>
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

                            <Form.Group className="mb-3" controlId="formGridMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} ref={bodyInput} required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
