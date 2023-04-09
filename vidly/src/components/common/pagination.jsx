import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props  => {
   const {itemsCount, pageSize, currentPage, onPageChange}= props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    console.log(pageCount);
    if (pageCount === 1) return null;
    const page = _.range(1, pageCount + 1);

    return ( 
        
<nav>
    <ul className="pagination">
        {page.map(page => (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={()=> onPageChange(page)}>
                {page}
            </a>
            </li>
    
        ))}
    
    </ul>
</nav>
     );
}
 
export default Pagination;