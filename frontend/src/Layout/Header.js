import Container from 'react-bootstrap/Container';
import {
    Nav,
    Navbar,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCartShopping , faUser as faUserLoggedIn } from '@fortawesome/free-solid-svg-icons'
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
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-light">About</Nav.Link>
                        <Nav.Link href="#pricing" className="text-light">Contact</Nav.Link>
                    </Nav>
                    <Form className="float-right">
                        <Row>
                            <Col xs="auto">
                                <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                            </Col>
                        </Row>
                    </Form>

                    <Nav className="text-light mx-2">
                        <Nav.Link href="#home" className="text-light">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Nav.Link>
                        <Nav.Link href="#home" className="text-light">
                            <FontAwesomeIcon icon={faUserLoggedOut} />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
