import Pagination from 'react-bootstrap/Pagination';

export default function ItemsPagination() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />

                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>

                <Pagination.Ellipsis />

                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}
