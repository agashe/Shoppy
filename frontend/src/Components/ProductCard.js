import { Card } from 'react-bootstrap';

export default function ProductCard () {
    return (
        <Card>
            <Card.Img variant="top" src="placeholder.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="text-danger font-weight-bold">
                    $10.50
                </Card.Text>
            </Card.Body>
        </Card>
    );
}