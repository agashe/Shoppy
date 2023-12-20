import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { default as axios } from 'axios';

export default function Contact() {
    const nameInput = useRef();
    const emailInput = useRef();
    const bodyInput = useRef();

    const [show, setShow] = useState(true);
    const [successMessage, setSuccessMessage] = useState(null);

    function submitContactUsForm(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/api/v1/contact', {
                name: nameInput.current.value,
                email: emailInput.current.value,
                body: bodyInput.current.value
            },  { crossDomain: true })
            .then(function (response) {
                setSuccessMessage(response.data.message);

                // reset form
                nameInput.current.value = ""
                emailInput.current.value = ""
                bodyInput.current.value = ""
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <Row>
            <Col md="8" className="mx-auto text-center screen-container">
                <h3 className="mb-1">Contact Us</h3>
                <p>Feel free to send us your message</p>

                {
                    successMessage &&
                    <Alert variant={"success"} onClose={() => setShow(false)} dismissible>
                        {successMessage}
                    </Alert>
                }

                <Card className="mt-5">
                    <Card.Body>
                        <Form>
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

                            <Button variant="primary" type="submit" onClick={submitContactUsForm}>
                                Send Message
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
