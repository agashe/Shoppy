import { Row, Col, Table, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function Cart() {
    return (
        <div class="screen-container">
            <h3 class="mb-3 text-center">My Cart</h3>

            <Row className="mt-5">
                <Col md="9" className="mx-auto">
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5, 7, 8, 9, 10].map((row, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ width: '50px' }} class="align-middle">{i + 1}</td>
                                            <td style={{ width: '350px' }} class="align-middle">
                                                <Row>
                                                    <Col md="3">
                                                        <img src="images/placeholder.png" style={{ width: '50px', height: '50px' }} />
                                                    </Col>
                                                    <Col md="9" className="ps-0 text-start">
                                                        <span>
                                                            Product name
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </td>
                                            <td style={{ width: '100px' }} class="align-middle">$50</td>
                                            <td class="align-middle">
                                                <Form>
                                                    <Row>
                                                        <Col xs="auto">
                                                            <InputGroup>
                                                                <Form.Control type="number" min="1" placeholder="Quantity" className="mr-2" style={{ width: '120px' }} value="2" />
                                                            </InputGroup>
                                                        </Col>
                                                        <Col xs="auto">
                                                            <Button variant="success">
                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </td>
                                            <td class="align-middle">
                                                <Button variant="primary" className="me-2">
                                                    <FontAwesomeIcon icon={faEye} />
                                                </Button>
                                                <Button variant="danger">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col md="3" className="mx-auto text-center mt-5">
                    <Button variant="success" size="lg" onClick={() => {window.location = '/checkout'; }}>
                        <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                        Checkout
                    </Button>
                </Col>
            </Row>
        </div>
    );
}