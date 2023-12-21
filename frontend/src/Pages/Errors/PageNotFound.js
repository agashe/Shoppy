import { Row, Col } from 'react-bootstrap';

export default function PageNotFound() {
    return (
        <Row>
            <Col md="8" className="mx-auto screen-container text-center">
                <h3>Page Not Found !</h3>
                <b>The page you are looking for doesn't exists</b>
            </Col>
        </Row>
    );
}