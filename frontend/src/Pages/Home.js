import { Col, Row, Carousel } from "react-bootstrap";
import CategoriesList from "../Components/CategoriesList";
import ProductCard from "../Components/ProductCard";
import { useState, useEffect } from 'react';
import { default as axios } from 'axios';

export default function Home() {
    const [homeContent, setHomeContent] = useState([]);

    useEffect(function() {
        axios.get('/', { crossDomain: true })
            .then(function (response) {
                setHomeContent(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <Row className="mb-4">
                <Col>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-1.png" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-2.png" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-3.png" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                {
                    homeContent &&
                    <>
                        <Col md="3">
                            <CategoriesList categories={homeContent.categories}/>
                        </Col>
                        <Col md="9">
                            <Row className="mb-4">
                            {
                                homeContent.products &&
                                homeContent.products.map((product, i) => {
                                    return (
                                        <Col md="4" key={i}>
                                            <ProductCard product={product} />
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </Col>
                    </>
                }
            </Row>
        </>
    );
}