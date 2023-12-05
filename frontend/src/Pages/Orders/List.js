import { Row, Col, Table, Button } from 'react-bootstrap';
import ItemsPagination from "../../Components/ItemsPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import StatusBadge from '../../Components/StatusBadge';

export default function List() {
    return (
        <div class="screen-container">
            <h3 class="mb-3 text-center">My Orders</h3>

            <Row className="mt-5 mb-3">
                <Col md="9" className="mx-auto">
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order ID</th>
                                <th>Total</th>
                                <th>Items</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Shipped At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((row, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ width: '50px' }} class="align-middle">{i + 1}</td>
                                            <td class="align-middle">A5Df78251</td>
                                            <td style={{ width: '100px' }} class="align-middle">$150.25</td>
                                            <td class="align-middle">3</td>
                                            <td style={{ width: '100px' }} class="align-middle"><StatusBadge status={'pending'} /></td>
                                            <td class="align-middle">20/11/2023 - 11:50</td>
                                            <td style={{ width: '175px' }} class="align-middle">21/11/2023 - 03:14</td>
                                            <td>
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

            <Row>
                <Col md="4" className="mx-auto text-center">
                    <ItemsPagination />
                </Col>
            </Row>
        </div>
    );
}