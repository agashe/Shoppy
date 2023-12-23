import { Row, Col, Table, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { default as axios } from 'axios';
import { useState } from 'react';

export default function Checkout() {
    const mediaURL = 'http://localhost:8000';
    const [show, setShow] = useState(true);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartTotal = localStorage.getItem('cart_total');
    const itemsCount = localStorage.getItem('items_count');

    function submitCheckoutForm(e) {
        setSubmitDisabled(true);
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setSubmitDisabled(false);

            return;
        }

        axios.post('/orders', cart,  {
            crossDomain: true,
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(function (response) {
            localStorage.setItem('cart', JSON.stringify([]));
            document.getElementById('cart-counter-icon').style.display = 'none';

            window.location.href = '/order/' + response.data.data.code;
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
            <h3 className="mb-3 text-center">Checkout</h3>
            <p className="mb-3 text-center">Check please all the information below , before processed </p>
            
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
                                <td className="align-middle">Name</td>
                                <td className="align-middle">
                                    <Form.Control type="text" placeholder="Enter name" value="Ahmed" disabled />
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
                                    <Form.Control type="text" placeholder="Enter address" value="5000st Test , Test City" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">Total</td>
                                <td className="align-middle">${cartTotal}</td>
                            </tr>
                            <tr>
                                <td className="align-middle">Items</td>
                                <td className="align-middle">{parseInt(itemsCount)}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="align-middle">
                                    <Button variant="success" disabled={submitDisabled} onClick={submitCheckoutForm}>
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
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               cart.map((item, i) => {
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