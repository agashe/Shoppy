import ListGroup from 'react-bootstrap/ListGroup';

export default function CategoriesList() {
    return (
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action>
                This one is a button
            </ListGroup.Item>
        </ListGroup>
    );
}