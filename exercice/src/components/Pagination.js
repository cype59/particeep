import React from 'react';
import { Pagination, PaginationItem } from 'reactstrap'


const MoviesPagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination aria-label="Page navigation example" style={{ margin: 15 }}>
            {pageNumbers.map(number => (
                <PaginationItem key={number}>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
                        {number}
                    </a>
                </PaginationItem>
            ))}
        </Pagination>
    );
};

export default MoviesPagination;