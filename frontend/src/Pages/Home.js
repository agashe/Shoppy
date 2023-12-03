import { Col, Row, Carousel } from "react-bootstrap";
import CategoriesList from "../Components/CategoriesList";
import ProductCard from "../Components/ProductCard";
import ProductsPagination from "../Components/ProductsPagination";

export default function Home() {
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-1.jpg" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-2.jpg" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="images/banners/shop-banner-3.jpg" alt="Shopping Banner" className="bg-background h-100 w-100 img-fluid" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <CategoriesList />
                </Col>
                <Col md="9">
                    {
                        [1, 2, 3, 4, 5].map((row, i) => {
                            return (
                                <Row key={i} className="mb-4">
                                    <Col md="4">
                                        <ProductCard />
                                    </Col>
                                    <Col md="4">
                                        <ProductCard />
                                    </Col>
                                    <Col md="4">
                                        <ProductCard />
                                    </Col>
                                </Row>
                            )
                        })
                    }

                    <Row>
                        <Col>
                            <ProductsPagination />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}