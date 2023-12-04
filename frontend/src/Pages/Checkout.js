import { Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Checkout() {
    return (
        <Row>
            <Col md="8" className="mx-auto text-center screen-container">
                <h3 class="mb-1">Contact Us</h3>
                <p>Feel free to send us your message</p>

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

                            <Form.Group className="mb-3" controlId="formGridMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
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
