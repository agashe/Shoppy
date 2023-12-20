import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function Checkout() {
    return (
        <div className="screen-container">
            <h3 className="mb-3 text-center">Checkout</h3>
            <p className="mb-3 text-center">Check please all the information below , before processed </p>
            
            <Row className="mb-3">
                <Col md="9" className="mx-auto">
                    <Table striped bordered hover className="text-center">
                        <tbody>
                            <tr>
                                <td className="align-middle">Name</td>
                                <td className="align-middle">
                                    <Form.Control type="text" placeholder="Enter name" value="Ahmed" />
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Email</td>
                                <td className="align-middle">
                                    <Form.Control type="email" value="user@example.com" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Address</td>
                                <td className="align-middle">
                                    <Form.Control type="text" placeholder="Enter address" value="5000st Test , Test City" />
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Total</td>
                                <td className="align-middle">$150.25</td>
                            </tr>
                            <tr>
                                <td className="align-middle">Items</td>
                                <td className="align-middle">3</td>
                            </tr>
                            <tr>
                                <td colspan="2" className="align-middle">
                                    <Button variant="success">
                                        <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                                        Create Order
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <hr className="my-4" />

            <Row className="mb-3">
                <Col md="9" className="mx-auto">
                    <h5 className="mb-3 text-center">Items</h5>
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
                                            <td style={{ width: '50px' }} className="align-middle">{i + 1}</td>
                                            <td style={{ width: '350px' }} className="align-middle">
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
                                            <td style={{ width: '100px' }} className="align-middle">$50</td>
                                            <td className="align-middle">3</td>
                                            <td className="align-middle">
                                                <Button variant="primary">
                                                    <FontAwesomeIcon icon={faEye} />
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
        </div>
    );
}