import { Row, Col, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import StatusBadge from '../../Components/StatusBadge';

export default function Show() {
    return (
        <div class="screen-container">
            <h3 class="mb-3 text-center">Order : A5Df78251</h3>

            <Row className="mb-3">
                <Col md="9" className="mx-auto">
                    <Table striped bordered hover className="text-center">
                        <tbody>
                            <tr>
                                <td class="align-middle">Total</td>
                                <td class="align-middle">$150.25</td>
                            </tr>
                            <tr>
                                <td class="align-middle">Items</td>
                                <td class="align-middle">3</td>
                            </tr>
                            <tr>
                                <td class="align-middle">Status</td>
                                <td class="align-middle"><StatusBadge status={'pending'} /></td>
                            </tr>
                            <tr>
                                <td class="align-middle">Created At</td>
                                <td class="align-middle">20/11/2023 - 11:50</td>
                            </tr>
                            <tr>
                                <td class="align-middle">Shipped At</td>
                                <td class="align-middle">21/11/2023 - 03:14</td>
                            </tr>
                            <tr>
                                <td class="align-middle">Actions</td>
                                <td class="align-middle">
                                    <Button variant="danger">
                                        <FontAwesomeIcon icon={faTrashCan} className="me-1" />
                                        Cancel This Order
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <hr class="my-4" />

            <Row className="mb-3">
                <Col md="9" className="mx-auto">
                    <h5 class="mb-3 text-center">Items</h5>
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
                                            <td class="align-middle">3</td>
                                            <td class="align-middle">
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