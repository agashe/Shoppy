import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function SignUp() {
    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                <h3 className="text-center mb-1">Sign Up</h3>
                <p className="text-center">Fill the form below , to register a new account</p>

                <Card className="mt-5">
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridConfirm">
                                    <Form.Label>Confirm</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" />
                            </Form.Group>

                            <Row>
                                <Col className="w-100">
                                    <Button variant="primary" type="submit" className="d-block mx-auto">
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
