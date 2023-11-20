import React from 'react';

type PaginationProps = {
  totalElements: number;
  elementsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalElements, elementsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 ${
                currentPage === 1 ? 'text-gray-500 pointer-events-none' : 'hover:text-gray-700'
              }`}
            onClick={(event) => {
                if (currentPage !== 1) {
                  onPageChange(currentPage - 1);
                }
                event.preventDefault();
              }}
            
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === pageNumber
                  ? 'text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                  : ''
              }`}
              onClick={(event) => {
                onPageChange(pageNumber);
                event.preventDefault();
              }}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 ${
              currentPage === totalPages ? 'text-gray-500 pointer-events-none' : 'hover:text-gray-700'
            }`}
            onClick={(event) => {
              if (currentPage !== totalPages) {
                onPageChange(currentPage + 1);
              }
              event.preventDefault();
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
