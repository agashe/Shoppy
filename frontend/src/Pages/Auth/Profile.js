import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function SignUp() {
    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                <h3 class="text-center mb-1">Profile</h3>
                <p class="text-center">You can update your information and reset your password , using the form below</p>

                <Card className="mt-5">
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" value="Ahmed" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value="user@example.com" disabled />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" value="5000st Test , Test City" />
                            </Form.Group>

                            <hr class="my-4" />

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter current password" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridConfirm">
                                    <Form.Label>Confirm</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm new password" />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col className="w-100">
                                    <Button variant="primary" type="submit" className="d-block mx-auto">
                                        Update
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
