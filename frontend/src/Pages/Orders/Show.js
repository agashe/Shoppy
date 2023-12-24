import { Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import StatusBadge from '../../Components/StatusBadge';
import { useState, useEffect, useLayoutEffect } from 'react';
import { default as axios } from 'axios';
import { useParams } from 'react-router';

export default function Show() {
    useLayoutEffect(() => {
        // check authentication
        if (localStorage.getItem('user') === null || 
            localStorage.getItem('user') === '' ||
            localStorage.getItem('user') === false
        ) {
            window.location.href = '/sign-in';
        }
    }, []);

    const mediaURL = 'http://localhost:8000';
    const user = JSON.parse(localStorage.getItem('user'));
    const [orderPageContent, setOrderPageContent] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [show, setShow] = useState(true);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false);
    const { code } = useParams();

    useEffect(function() {
        axios.get(`/orders/${code}`, {
                crossDomain: true,
                headers: { Authorization: `Bearer ${user.token}` }
            })
            .then(function (response) {
                setOrderPageContent(response.data.data);
                setOrderItems(JSON.parse(response.data.data.items));
                setOrderStatus(response.data.data.status);
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error
                console.log('Error : Can not load data !');
            });
    }, []);

    function cancelOrder(e) {
        if (!window.confirm('Are you sure ?')) {
            return;
        }

        e.preventDefault();
    
        axios.delete('/orders/' + orderPageContent.code, {
            crossDomain: true,
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(function (response) {
            // set order status
            setOrderStatus('cancelled');

            // show success message
            setShow(true);
            setMessage(response.data.message);
            setMessageType('success');
        })
        .catch(function (error) {
            // we can add some logging mechanism to report the error

            // show error message
            setMessage(error.response.data.message);
            setMessageType('danger');
        })
        .finally(function () {
            setSubmitDisabled(false);
        });
    }

    return (
        <div className="screen-container">
            <h3 className="mb-3 text-center">Order : {orderPageContent.code}</h3>

            {
                message &&
                <Alert variant={messageType} onClose={() => setShow(false)} show={show} dismissible>
                    {message}
                </Alert>
            }

            <Row className="mb-3">
                <Col md="9" className="mx-auto">
                    <Table striped bordered hover className="text-center">
                        <tbody>
                            <tr>
                                <td className="align-middle">Total</td>
                                <td className="align-middle">${orderPageContent.total}</td>
                            </tr>
                            <tr>
                                <td className="align-middle">Items</td>
                                <td className="align-middle">{orderPageContent.items_count}</td>
                            </tr>
                            <tr>
                                <td className="align-middle">Status</td>
                                <td className="align-middle"><StatusBadge status={orderStatus} /></td>
                            </tr>
                            <tr>
                                <td className="align-middle">Created At</td>
                                <td className="align-middle">{(new Date(orderPageContent.created_at).toDateString())}</td>
                            </tr>
                            <tr>
                                <td className="align-middle">Shipped At</td>
                                <td className="align-middle">{orderPageContent.shipped_at ? (new Date(orderPageContent.shipped_at).toDateString()) : '---'}</td>
                            </tr>
                            {
                                (orderStatus === 'pending') &&
                                <tr>
                                    <td className="align-middle">Actions</td>
                                    <td className="align-middle">
                                        <Button variant="danger" disabled={submitDisabled} onClick={cancelOrder}>
                                            <FontAwesomeIcon icon={faTrashCan} className="me-1" />
                                            Cancel This Order
                                        </Button>
                                    </td>
                                </tr>
                            }
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
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               orderItems.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td style={{ width: '50px' }} className="align-middle">{i + 1}</td>
                                            <td style={{ width: '350px' }} className="align-middle">
                                                <Row style={{ cursor: 'pointer' }} onClick={() => {window.location.href = `/product/${item.product_id}/${item.product_name.replaceAll(' ', '+')}` }}>
                                                    <Col md="3">
                                                        <img src={item.product_image ? (mediaURL + item.product_image): 'images/placeholder.png'} style={{ width: '50px', height: '50px' }} alt={item.product_name + " image"} />
                                                    </Col>
                                                    <Col md="9" className="ps-0 pt-3 text-start">
                                                        <span>
                                                            {item.product_name}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </td>
                                            <td style={{ width: '100px' }} className="align-middle">{'$' + item.price}</td>
                                            <td className="align-middle">{item.quantity}</td>
                                            <td className="align-middle">${item.quantity * item.price}</td>
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