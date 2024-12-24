import {useState, useEffect, useCallback} from 'react';
import './index.css'

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {

      const [pageNumbers, setPageNumbers] = useState([]);

const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Calculate visible page numbers (3 pages at a time)
  const getPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const leftEdge = currentPage - 1 > 1 ? currentPage - 1 : 1;
    const rightEdge = currentPage + 1 < totalPages ? currentPage + 1 : totalPages;

    if (currentPage === 1) {
      pageNumbers.push(1, 2, 3);
    } else if (currentPage === totalPages) {
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(leftEdge, currentPage, rightEdge);
    }

    return pageNumbers;
  }, [currentPage, totalPages]);


    useEffect(() => {
        setPageNumbers(getPageNumbers());
    }, [currentPage, totalPages, getPageNumbers]);

  return (
    <nav aria-label="Pagination" className="pagination" data-testid="pagination">
      <ul className="pagination-list">
        {/* First Page Button */}
        {currentPage > 3 && (
          <li className="pagination-item">
            <button onClick={() => paginate(1)} className="pagination-button" aria-label="First Page">
              «
            </button>
          </li>
        )}

        {/* Previous Page Button */}
        {currentPage > 1 && (
          <li className="pagination-item">
            <button onClick={() => paginate(currentPage - 1)} className="pagination-button" aria-label="Previous Page">
              Previous
            </button>
          </li>
        )}

        {/* Page Number Buttons */}
        {pageNumbers.map((number) => (
          <li key={number} className={`pagination-item ${number === currentPage ? 'active' : ''}`} aria-label={`Page number ${number}`}>
            <button
              onClick={() => paginate(number)}
              className="pagination-button"
              aria-current={number === currentPage ? 'page' : 'false'}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Next Page Button */}
        {currentPage < totalPages && (
          <li className="pagination-item">
            <button onClick={() => paginate(currentPage + 1)} className="pagination-button" aria-label="Next Page">
              Next
            </button>
          </li>
        )}

        {/* Last Page Button */}
        {currentPage < totalPages - 2 && (
          <li className="pagination-item">
            <button onClick={() => paginate(totalPages)} className="pagination-button"  aria-label="Last Page">
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );

};


export default Pagination;
