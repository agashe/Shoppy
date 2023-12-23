import { Row, Col, Table, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react';

export default function Cart() {
    const mediaURL = 'http://localhost:8000';
    const [cartItems, setCartItems] = useState([]);

    useEffect(function() {
        setCartItems(JSON.parse(localStorage.getItem('cart')));
    }, []);

    function updateCart(id, val) {
        if ((val === '') || (parseInt(val) < 1)) {
            alert('Invalid quantity !!');
            return;
        }

        let updatedCart = cartItems.map(function (item) {
            if (item.product_id !== id) {
                item.quantity = val;
            }

            return item;
        });

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        let cartTotal = 0;
        let itemsCount = 0;
        
        for (let item of updatedCart) {
            cartTotal += item.price * item.quantity;
            itemsCount += parseInt(item.quantity);
        }

        localStorage.setItem('cart_total', cartTotal);
        localStorage.setItem('items_count', itemsCount);
    }

    function removeItem(id) {
        if (!window.confirm('Are you sure ?')) {
            return;
        }

        let updatedCart = cartItems.filter(function (item) {
            return item.product_id !== id;
        });

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        let cartTotal = 0;
        let itemsCount = 0;
        
        for (let item of updatedCart) {
            cartTotal += item.price * item.quantity;
            itemsCount += parseInt(item.quantity);
        }

        localStorage.setItem('cart_total', cartTotal);
        localStorage.setItem('items_count', itemsCount);

        // remove cart indicator
        if (!updatedCart.length) {
            document.getElementById('cart-counter-icon').style.display = 'none';
        }
    }

    return (
        <div className="screen-container">
            <h3 className="mb-3 text-center">My Cart</h3>

            {
                cartItems &&
                cartItems.length ?
                <Row className="mt-5">
                    <Col md="9" className="mx-auto">
                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems &&
                                    cartItems.map((item, i) => {
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
                                                <td className="align-middle">
                                                    <Form>
                                                        <Row>
                                                            <Col xs="auto">
                                                                <InputGroup>
                                                                    <Form.Control type="number" min="1" placeholder="Quantity" className="mr-2" value={item.quantity} onChange={(e) => {updateCart(item.id, e.target.value)}} />
                                                                </InputGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </td>
                                                <td style={{ width: '100px' }} className="align-middle">${item.quantity * item.price}</td>
                                                <td className="align-middle">
                                                    <Button variant="danger" onClick={() => {removeItem(item.product_id)}}>
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
                </Row> : <h3 className={"text-center"}>No items in the cart yet !</h3>
            }

            {
                cartItems &&
                cartItems.length ?
                <Row>
                    <Col md="3" className="mx-auto text-center mt-5">
                        <Button variant="success" size="lg" onClick={() => {window.location = '/checkout'; }}>
                            <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                            Checkout
                        </Button>
                    </Col>
                </Row> : null
            }
        </div>
    );
}