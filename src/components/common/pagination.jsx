import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  let { itemCount, pageSize, currentPage, onPageChange } = props;
  //console.log(currentPage);

  let pageCount = itemCount / pageSize;
  if (pageCount <= 1) return null;
  let pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination" style={{ listStyleType: "none" }}>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
