import React, { Component } from 'react';

const ListNavigation = function(props) {
  console.log(props);
  return(
    <div className="row">
      <div className="col-md-12">
        <div className="page-list">
          <div id="prev" className={(props.currentPage == 1) ? "disabled" : ""}>
            <a href={`${props.location}?page=${props.currentPage-1}`}>
              <h3 className="sub-title-bg txt-white" id="highlight-see-all">Previous</h3>
            </a>
          </div>
          <div id="next" className={ (props.currentPage == props.totalPages) ? "disabled" : ""}>
            <a href={`${props.location}?page=${props.currentPage+1}`}>
              <h3 className="sub-title-bg txt-white" id="highlight-see-all">Next</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListNavigation;