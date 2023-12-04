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
    faUser as faUserLoggedIn
} from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserLoggedOut } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
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
                                    <Form.Control type="text" placeholder="Search ..." className="mr-2" />
                                    <Button variant="light" className="border-white">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form>

                    <Nav className="text-light mx-2">
                        <Nav.Link href="#home" className="text-light position-relative">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="cart-counter"></span>
                        </Nav.Link>
                        <Nav.Link href="/sign-in" className="text-light">
                            <FontAwesomeIcon icon={faUserLoggedOut} />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
