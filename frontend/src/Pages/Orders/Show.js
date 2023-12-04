import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

export default function Show() {
    return (
        <Row className="screen-container">
            <Col md="6">
                <img src="images/placeholder.png" class="product-image" />
            </Col>
            <Col md="6">
                <h3>Product name goes here</h3>
                <p class="fs-3 font-weight-bold text-danger">$10.50</p>
                <article>
                    This product description goes here , This product description goes here
                    This product description goes here , This product description goes here
                    This product description goes here, This product description goes here
                </article>

                <Form>
                    <Row className="mt-5">
                        <Col xs="auto">
                            <InputGroup>
                                <Form.Control type="number" min="1" placeholder="Quantity" className="mr-2" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button variant="primary" className="border-white">
                                Add To Cart
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}