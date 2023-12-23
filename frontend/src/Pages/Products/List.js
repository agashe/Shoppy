import { Row, Col } from 'react-bootstrap';
import CategoriesList from "../../Components/CategoriesList";
import ProductCard from "../../Components/ProductCard";
import ItemsPagination from "../../Components/ItemsPagination";
import { useState, useEffect } from 'react';
import { default as axios } from 'axios';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export default function List() {
    const [productsPageContent, setProductsPageContent] = useState([]);
    let [searchParams] = useSearchParams();
    const { op, arg, slug } = useParams();
    let currentPage = searchParams.get('page') ?? 1;

    useEffect(function() {
        axios.get(`/products/${op}/${arg}/${slug}?page=${currentPage}`, { crossDomain: true })
            .then(function (response) {
                setProductsPageContent(response.data.data);

                // add search keyword
                if (op === 's') {
                    document.getElementById('search-box').value = arg;
                }
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error
                console.log('Error : Can not load data !');
            });
    }, [op, arg, slug, currentPage]);

    return (
        <>
            <Row>
                <Col md="3">
                    <CategoriesList categories={productsPageContent.categories} activeCategory={op === 'c' ? arg : ''} />
                </Col>
                <Col md="9">
                    {
                        productsPageContent &&
                        <>
                            <Row className="screen-container">
                                {
                                    productsPageContent.products ?
                                    productsPageContent.products.map((product, i) => {
                                        return (
                                            <Col md="4" key={i}>
                                                <ProductCard product={product} />
                                            </Col>
                                        )
                                    }) :
                                    <Col>
                                        <h3>Sorry, no results !</h3>
                                    </Col>
                                }
                            </Row>
                        </>
                    }

                    {
                        productsPageContent.products &&
                        <Row>
                            <Col>
                                <ItemsPagination url={`/products/${op}/${arg}/${slug}`} pages={[...Array(productsPageContent.pages).keys()]} currentPage={currentPage} />
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
        </>
    );
}