import ListGroup from 'react-bootstrap/ListGroup';

export default function CategoriesList({ categories }) {
    return (
        <ListGroup defaultActiveKey="#link1">
            {
                categories ?
                categories.map((category) => {
                    return (
                        <ListGroup.Item key={category.id} action href="/products">
                            {category.name}
                        </ListGroup.Item>
                    );
                }) : null
            }
        </ListGroup>
    );
}