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
import { faUser as faUserNotLoggedIn } from '@fortawesome/free-regular-svg-icons'
import { useRef } from 'react';

export default function Header() {
    const keywordInput = useRef();
    const userIsLoggedIn = (localStorage.getItem('user') !== null);
    
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    const cartIsNotEmpty = ((cart !== null) && (cart.length > 0));

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

    function signOut(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.href = '/';
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
                            <span id="cart-counter-icon" className="cart-counter" style={{ display: (cartIsNotEmpty ? 'block' : 'none') }}></span>
                        </Nav.Link>
                        {
                            userIsLoggedIn ?
                            <>
                                <Nav.Link href="/profile" className="text-light">
                                    <FontAwesomeIcon icon={faUserLoggedIn} />
                                </Nav.Link>
                                <Nav.Link href="/orders" className="text-light">
                                    <FontAwesomeIcon icon={faList} />
                                </Nav.Link>
                                <Nav.Link className="text-light" onClick={signOut}>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </Nav.Link>
                            </>
                            :
                            <Nav.Link href="/sign-in" className="text-light">
                                <FontAwesomeIcon icon={faUserNotLoggedIn} />
                            </Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
