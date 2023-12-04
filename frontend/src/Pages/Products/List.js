import { Row, Col } from 'react-bootstrap';
import CategoriesList from "../../Components/CategoriesList";
import ProductCard from "../../Components/ProductCard";
import ItemsPagination from "../../Components/ItemsPagination";

export default function List() {
    return (
        <>
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
                            <ItemsPagination />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}