import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center p-5">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`page-link ${activePage === number ? "active" : ""}`}
              onClick={() => handlePageClick(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
