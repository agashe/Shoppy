import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function SignIn() {
    return (
        <Row>
            <Col md="4" className="mx-auto screen-container">
                <h3 class="mb-1 text-center">Sign In</h3>

                <Card className="mt-5">
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formGridEmail" className="mb-4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className="my-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <a href="/sign-up" class="d-block link-primary link-underline-primary mt-5 mb-4 fs-6">
                                Don't have account yet , register !
                            </a>

                            <Button variant="primary" type="submit" className="w-100">
                                Let me in
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
