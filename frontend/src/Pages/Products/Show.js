import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { default as axios } from 'axios';
import { useParams } from 'react-router';

export default function Show() {
    const mediaURL = 'http://localhost:8000';
    const [productPageContent, setProductPageContent] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [validated, setValidated] = useState(false);
    const [productWasAdded, setProductWasAdded] = useState(false);
    const { id, slug } = useParams();
    const quantityInput = useRef(1);

    let cart = [];
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    
    useEffect(function() {
        axios.get(`/products/p/${id}/${slug}`, { crossDomain: true })
            .then(function (response) {
                setProductPageContent(response.data.data);      
                quantityInput.current.value = 1;
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error
                console.log('Error : Can not load data !');
            });
    }, [id, slug]);

    function submitAddToCart(e) {
        setSubmitDisabled(true);
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();

            setValidated(true);
            setSubmitDisabled(false);
            
            return;
        }

        cart.push({
            product_id: productPageContent.id,
            product_image: productPageContent.image,
            product_name: productPageContent.name,
            price: productPageContent.price,
            quantity: quantityInput.current.value
        });

        localStorage.setItem('cart', JSON.stringify(cart));

        let cartTotal = 0;
        let itemsCount = 0;
        
        for (let item of cart) {
            cartTotal += item.price * item.quantity;
            itemsCount += parseInt(item.quantity);
        }

        localStorage.setItem('cart_total', cartTotal);
        localStorage.setItem('items_count', itemsCount);

        setProductWasAdded(true);
        setSubmitDisabled(false);

        // set cart indicator
        document.getElementById('cart-counter-icon').style.display = 'block';
    }

    return (
        <Row className="screen-container">
            <Col md="6">
                <img src={productPageContent.image ? (mediaURL + productPageContent.image): 'images/placeholder.png'} className="product-image" alt={productPageContent.name + " image"} />
            </Col>
            <Col md="6">
                <h3>{productPageContent.name}</h3>
                <p className="fs-3 font-weight-bold text-danger">{'$' + productPageContent.price}</p>
                <article>
                    {productPageContent.description}
                </article>

                {
                    (productWasAdded || cart.some(el => el.product_id === productPageContent.id)) ? 
                    <h3 className="mt-3 text-success">Product was added to cart !</h3>
                    :
                    <Form noValidate validated={validated} onSubmit={submitAddToCart}>
                        <Row className="mt-5">
                            <Col xs="auto">
                                <InputGroup>
                                    <Form.Control type="number" min="1" placeholder="Quantity" className="mr-2" ref={quantityInput} required />
                                </InputGroup>
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="primary" className="border-white" disabled={submitDisabled}>
                                    Add To Cart
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                }
            </Col>
        </Row>
    );
}