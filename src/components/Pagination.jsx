import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const buttonStyle = {
    padding: '6px 12px',
    margin: '0 4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '4px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
    color: '#fff',
    fontWeight: 'bold'
  };

  return (
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        style={buttonStyle}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          style={currentPage === page ? activeButtonStyle : buttonStyle}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        style={buttonStyle}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
