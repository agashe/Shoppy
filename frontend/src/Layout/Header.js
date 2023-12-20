import Container from 'react-bootstrap/Container';
import {
    Nav,
    Navbar,
    Form,
    Row,
    Col,
    InputGroup,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBasketShopping,
    faCartShopping,
    faMagnifyingGlass,
    faList,
    faRightFromBracket,
    faUser as faUserLoggedIn
} from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserLoggedOut } from '@fortawesome/free-regular-svg-icons'
import { useState, useRef } from 'react';
import { default as axios } from 'axios';

export default function Header() {
    const keywordInput = useRef();

    function search(e) {
        e.preventDefault();

        window.location.href = "/products/s/" + keywordInput.current.value;
    }

    function handleKeyboardSearch(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            window.location.href = "/products/s/" + keywordInput.current.value;
        }
    }

    return (
        <header>
            <Navbar bg="primary" className="justify-content-center">
                <Container className="mx-1">
                    <Navbar.Brand className="text-light">
                        <FontAwesomeIcon icon={faBasketShopping} />
                        <span className="d-inline-block ms-1">Shoppy</span>
                    </Navbar.Brand>
                    <Nav className="me-auto text-light">
                        <Nav.Link href="/" className="text-light">Home</Nav.Link>
                        <Nav.Link href="/about" className="text-light">About</Nav.Link>
                        <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
                    </Nav>
                    <Form className="float-right">
                        <Row>
                            <Col xs="auto">
                                <InputGroup>
                                    <Form.Control type="text" placeholder="Search ..." className="mr-2" ref={keywordInput} id="search-box" onKeyDown={handleKeyboardSearch} />
                                    <Button variant="light" className="border-white" onClick={search}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form>

                    <Nav className="text-light mx-2">
                        <Nav.Link href="/cart" className="text-light position-relative">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="cart-counter"></span>
                        </Nav.Link>
                        <Nav.Link href="/sign-in" className="text-light">
                            <FontAwesomeIcon icon={faUserLoggedOut} />
                        </Nav.Link>
                        <Nav.Link href="/orders" className="text-light">
                            <FontAwesomeIcon icon={faList} />
                        </Nav.Link>
                        <Nav.Link href="/sign-out" className="text-light">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
