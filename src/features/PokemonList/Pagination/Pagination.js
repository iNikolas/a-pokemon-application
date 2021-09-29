import React from "react";
import PropTypes from "prop-types";

export default function Pagination({ prevPageUrl, nextPageUrl, setPage }) {
  return (
    <>
      <button disabled={!prevPageUrl} onClick={() => setPage(prevPageUrl)}>
        Previous
      </button>
      <button disabled={!nextPageUrl} onClick={() => setPage(nextPageUrl)}>
        Next
      </button>
    </>
  );
}

Pagination.propTypes = {
  prevPageUrl: PropTypes.string,
  nextPageUrl: PropTypes.string,
  setPage: PropTypes.func,
};
