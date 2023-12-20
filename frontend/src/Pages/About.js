import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { default as axios } from 'axios';
import parse from 'html-react-parser'

export default function About() {
    const [aboutContent, setAboutContent] = useState(null);

    useEffect(function() {
        axios.get('http://localhost:5000/api/v1/about', { crossDomain: true })
            .then(function (response) {
                setAboutContent(parse(response.data.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                {aboutContent}
            </Col>
        </Row>
    );
}