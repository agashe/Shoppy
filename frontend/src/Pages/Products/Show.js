import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { default as axios } from 'axios';
import { useParams } from 'react-router';

export default function Show() {
    const mediaURL = 'http://localhost:8000';
    const [productPageContent, setProductPageContent] = useState([]);
    const { id, slug } = useParams();
    
    useEffect(function() {
        axios.get(`/products/p/${id}/${slug}`, { crossDomain: true })
            .then(function (response) {
                setProductPageContent(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <Row className="screen-container">
            <Col md="6">
                <img src={productPageContent.image ? (mediaURL + productPageContent.image): 'images/placeholder.png'} className="product-image" />
            </Col>
            <Col md="6">
                <h3>{productPageContent.name}</h3>
                <p className="fs-3 font-weight-bold text-danger">{'$' + productPageContent.price}</p>
                <article>
                    {productPageContent.description}
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