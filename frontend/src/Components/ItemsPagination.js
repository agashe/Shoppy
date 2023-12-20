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
                                    <Pagination.Item key={i} href={`${url}?page=${page}`}
                                        active={currentPage && (currentPage == page)}>
                                        {page}
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
