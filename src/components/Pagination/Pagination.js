import React,{Component} from 'react';

import './Pagination.scss';

class Pagination extends Component {

   constructor(props) {
      super(props);
      this.state = {
         currentCoupons: []
      }
   }

   render() {

     const pageNumbers = [];
     for(let i = 1; i <= Math.ceil(this.props.allcoupons.length / this.props.couponsPerPage); i++) {
        pageNumbers.push(i);
     }


     const renderPageNumbers = pageNumbers.map(number => {
        return(
           <li
             key={number}
             className={"page-item " + (number == this.props.currentPage ? 'active': '')}
           >
               <a href=""
                className="page-link"
                id={number}
                onClick={this.props.handlePagination}
                >
                 {number}
               </a>
           </li>
        )
     })

     const indexOfLastPage = this.props.currentPage * this.props.couponsPerPage;
     const indexOfFirstPage = indexOfLastPage - this.props.couponsPerPage;
     const currentCoupons = this.props.allcoupons.slice(indexOfFirstPage, indexOfLastPage);

      return (
         <div className="pagination">
            <div>
              <ul className="pagination__items">
                {
                   (currentCoupons.length == this.props.allcoupons.length)
                   ? ''
                   : renderPageNumbers
                }

              </ul>
            </div>
            <div className="pagination__show">

              <div className="pagination__show-inner">
                 <div>
                  Показаны:
                 </div>
                 <div>
                 {
                   currentCoupons.length
                 }
                 </div>
                 <div>
                   из
                 </div>
                 <div>
                 {
                   this.props.allcoupons.length
                 }
                 </div>

              </div>

            </div>
            <div className="pagination__select">
              <div>
                <select name="" id="" onChange={this.props.couponsOnPage}>
                  <option value="10">Отображать по 10</option>
                  <option value="20">Отображать по 20</option>
                  <option value="30">Отображать по 30</option>
                </select>
              </div>
            </div>
         </div>
      )
   }
}

export default Pagination;
