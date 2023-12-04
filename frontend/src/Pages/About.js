import { Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                <h3 class="mb-5 text-center">About Shoppy</h3>
                
                <article>
                    Shoppy is a small e-commerce application , with basic functionality including ,
                    register/login , categories , products search , cart operations , checkout and orders detail page.
                    the application was built using React on the front side, Fiber for the backend APIs
                    , Django for the dashboard.
                </article>

                <br />

                <article>
                    A SQLite3 database is used for storing the data , this could be replaced with any other SQL
                    database of your choice like MySQL , PostgreSQL or MSSQL.
                </article>

                <br />

                <article>
                    For the installation instructions , check please the Github repo.
                </article>
            </Col>
        </Row>
    );
}