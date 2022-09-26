import axios from 'axios'
import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'


const Pagination = ({
  pageCount, 
  setAnimals, 
  currentPage, 
  setAnimalsCount, 
  setCurrentPage, 
  setOffset, 
  offset}) => {
  
  const handlePageClick = (data) => {
  
    setCurrentPage(data.selected + 1)
    axios.get(`https://acits-test-back.herokuapp.com/api/animals?limit=5&offset=${offset}`, {
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(data => {
      setAnimals(data.data.results)
      setOffset(currentPage*3)
      setAnimalsCount(data.data.count)
    })
    
  }




  return (
    <ReactPaginate 
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    marginPagesDisplayed={0}
    pageCount={pageCount}
    previousLabel="< previous"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakLabel="..."
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeClassName="active"
    renderOnZeroPageCount={null}/>
  )
}

export default Pagination