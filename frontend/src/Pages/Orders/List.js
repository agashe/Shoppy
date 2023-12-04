import { Row, Col } from 'react-bootstrap';
import ItemsPagination from "../../Components/ItemsPagination";

export default function List() {
    return (
        <>
            <Row>
                <Col md="9" className="mx-auto">
                    {
                        [1, 2, 3, 4, 5].map((row, i) => {
                            return (
                                <div></div>
                            )
                        })
                    }
                </Col>

                <Row>
                    <Col>
                        <ItemsPagination />
                    </Col>
                </Row>
            </Row>
        </>
    );
}