import { Row, Col, Table, Button } from 'react-bootstrap';
import ItemsPagination from "../../Components/ItemsPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import StatusBadge from '../../Components/StatusBadge';
import { useState, useEffect, useLayoutEffect } from 'react';
import { default as axios } from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function List() {
    useLayoutEffect(() => {
        // check authentication
        if (localStorage.getItem('user') === null || 
            localStorage.getItem('user') === '' ||
            localStorage.getItem('user') === false
        ) {
            window.location.href = '/sign-in';
        }
    }, []);

    const user = JSON.parse(localStorage.getItem('user'));
    const [ordersPageContent, setOrdersPageContent] = useState([]);
    let [searchParams] = useSearchParams();
    let currentPage = searchParams.get('page') ?? 1;

    useEffect(function() {
        axios.get(`/orders?page=${currentPage}`, {
                crossDomain: true,
                headers: { Authorization: `Bearer ${user.token}` }
            })
            .then(function (response) {
                setOrdersPageContent(response.data.data);
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error
                console.log('Error : Can not load data !');
            });
    }, []);

    return (
        <div className="screen-container">
            <h3 className="mb-3 text-center">My Orders</h3>

            {
                ordersPageContent.orders &&
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
                                    ordersPageContent.orders.map((order, i) => {
                                        return (
                                            <tr key={i}>
                                                <td style={{ width: '50px' }} className="align-middle">{i + 1}</td>
                                                <td className="align-middle">{order.code}</td>
                                                <td style={{ width: '100px' }} className="align-middle">${order.total}</td>
                                                <td className="align-middle">{order.items_count}</td>
                                                <td style={{ width: '100px' }} className="align-middle"><StatusBadge status={order.status} /></td>
                                                <td className="align-middle">{(new Date(order.created_at).toDateString())}</td>
                                                <td style={{ width: '175px' }} className="align-middle">{order.shipped_at ? (new Date(order.shipped_at).toDateString()) : '---'}</td>
                                                <td>
                                                    <Button variant="primary" onClick={() => {window.location.href = '/order/' + order.code}}>
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
            }

            {
                ordersPageContent.orders &&
                <Row>
                    <Col md="4" className="mx-auto text-center">
                        <ItemsPagination url={`/orders`} pages={[...Array(ordersPageContent.pages).keys()]} currentPage={currentPage} />
                    </Col>
                </Row>
            }
        </div>
    );
}