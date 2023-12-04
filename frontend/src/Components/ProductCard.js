import { Card } from 'react-bootstrap';

export default function ProductCard() {
    return (
        <Card>
            <a href="/product" class="text-decoration-none">
                <Card.Img variant="top" src="images/placeholder.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-danger font-weight-bold">
                        $10.50
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    );
}