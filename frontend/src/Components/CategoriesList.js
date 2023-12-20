import ListGroup from 'react-bootstrap/ListGroup';

export default function CategoriesList({ categories, activeCategory }) {
    return (
        <ListGroup defaultActiveKey="#link1">
            {
                categories ?
                categories.map((category) => {
                    return (
                        <ListGroup.Item key={category.id}
                            active={activeCategory && (activeCategory == category.id)}
                            action={!(activeCategory && (activeCategory == category.id))}
                            href={`/products/c/${category.id}/${encodeURIComponent(category.name)}`}>
                            {category.name}
                        </ListGroup.Item>
                    );
                }) : null
            }
        </ListGroup>
    );
}