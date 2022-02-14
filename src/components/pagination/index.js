import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./style.css";
/**
 *
 * @param {Number} currentPage - start of the page
 * @param {Number} totalData - total data in one page
 * @param {() => {}} onChangePage - to change page
 * @param {Number} dataPerPage - default 5
 * @returns
 */

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const CustomPagination = (props) => {
  let { currentPage = 0, totalData = 0, onChangePage = {}, dataPerPage = 5 } = props;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + dataPerPage;

    // Fetch items from another resources.
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / dataPerPage));
  }, [itemOffset, dataPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * dataPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  // console.log("currentItem: ", currentItems);

  return (
    <ReactPaginate
      pageRangeDisplayed={1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="pagination-container"
      nextLabel=">"
      previousLabel="<"
      breakLabel="..."
      breakClassName="pagination-break"
      breakLinkClassName="pagination-break-link"
      pageClassName="pagination-page"
      pageLinkClassName="pagination-page-link"
      activeClassName="pagination-active"
      activeLinkClassName="pagination-active-link"
      prevRel={null}
      nextClassName="navButton"
      previousClassName="navButton"
      selectedPageRel={null}
    />
  );
};

export default CustomPagination;
