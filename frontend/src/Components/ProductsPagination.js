import Pagination from 'react-bootstrap/Pagination';

export default function ProductsPagination() {
    return (
        <Pagination className="mx-auto w-50">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}
