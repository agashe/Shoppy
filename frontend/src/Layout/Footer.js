import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer>
            <Container className="my-3">
                <Row>
                    <Col className="text-center">
                        { `Shoppy (C) All rights reserved ${new Date().getFullYear()}` }
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}