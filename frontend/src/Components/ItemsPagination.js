import Pagination from 'react-bootstrap/Pagination';

export default function ItemsPagination({ url, pages, currentPage }) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />

                {
                    pages &&
                    <>
                        {
                            pages.map((page, i) => {
                                return (
                                    <Pagination.Item key={i} href={`${url}?page=${(page + 1)}`}
                                        active={currentPage && (parseInt(currentPage) === (page + 1))}>
                                        {(page + 1)}
                                    </Pagination.Item>
                                );
                            })
                        }
                    </>
                }

                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}
