import { Card } from 'react-bootstrap';

export default function ProductCard({ product }) {
    const mediaURL = 'http://localhost:8000';

    return (
        <>
            {
                product ?
                (
                    <Card>
                        <a href={`/product/${product.id}/${product.name.replaceAll(' ', '+')}`} 
                            className="text-decoration-none">
                            <Card.Img variant="top" className="product-card-image" src={product.image ? 
                                (mediaURL + product.image): 'images/placeholder.png'} alt={product.name + " image"} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text className="text-danger font-weight-bold">
                                    ${product.price}
                                </Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                ): null
            }
        </>
    );
}