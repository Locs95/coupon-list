import React,{Component} from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import './CouponList.scss';
import { connect } from 'react-redux';
import { initCoupons,
         cancelCoupon,
         sortUpByCouponNumber,
         sortDownByCouponNumber,
         sortUpBySectionName,
         sortDownBySectionName,
         sortUpByCouponStatus,
         sortDownByCouponStatus,
         sortUpByWindowNum,
         sortDownByWindowNum,
         sortUpByPriority,
         sortDownByPriority,
         sortUpBySpecialist,
         sortDownBySpecialist,
         sortUpByReceiptTime,
         sortDownByReceiptTime,
         sortUpByWaitingTime,
         sortDownByWaitingTime,
         sortUpByDuration,
         sortDownByDuration } from '../../store/actions/coupons';
import CouponItem from '../CouponItem/CouponItem';
import Pagination from '../Pagination/Pagination';

class CouponList extends Component {

    constructor(props) {
       super(props);

       this.state = {
          selectedCoupon: null,
          buttonDisabled: true,
          currentPage: 1,
          couponsPerPage: 10,
          currentCoupons: [],
          sortSectionName: false
       }

       this.eachCoupon = this.eachCoupon.bind(this);
       this.renderCoupon = this.renderCoupon.bind(this);
       this.handlePagination = this.handlePagination.bind(this);
       this.couponsOnPage = this.couponsOnPage.bind(this);
       this.callToAdministrator = this.callToAdministrator.bind(this);
       this.startTaking = this.startTaking.bind(this);
       this.cancelCoupon = this.cancelCoupon.bind(this);
       this.sortUpCouponNumber = this.sortUpCouponNumber.bind(this);
       this.sortDownCouponNumber = this.sortDownCouponNumber.bind(this);
       this.sortUpSectionName = this.sortUpSectionName.bind(this);
       this.sortDownSectionName = this.sortDownSectionName.bind(this);
       this.sortUpCouponStatus = this.sortUpCouponStatus.bind(this);
       this.sortDownCouponStatus = this.sortDownCouponStatus.bind(this);
       this.sortUpWindowNum = this.sortUpWindowNum.bind(this);
       this.sortDownWindowNum = this.sortDownWindowNum.bind(this);
       this.sortUpPriority = this.sortUpPriority.bind(this);
       this.sortDownPriority = this.sortDownPriority.bind(this);
       this.sortUpSpecialist = this.sortUpSpecialist.bind(this);
       this.sortDownSpecialist = this.sortDownSpecialist.bind(this);
       this.sortUpReceiptTime = this.sortUpReceiptTime.bind(this);
       this.sortDownReceiptTime = this.sortDownReceiptTime.bind(this);
       this.sortUpWaitingTime = this.sortUpWaitingTime.bind(this);
       this.sortDownWaitingTime = this.sortDownWaitingTime.bind(this);
       this.sortUpDuration = this.sortUpDuration.bind(this);
       this.sortDownDuration = this.sortDownDuration.bind(this);
    }

    componentWillMount() {

        let self = this;
        fetch('./coupons.json')
             .then((response) => response.json())
             .then((data) => {
                 self.props.onCoupons(data);
             })
    }

    sortUpCouponNumber(e) {
       e.preventDefault();
       this.props.onSortUpByCouponNumber();

    }

    sortDownCouponNumber(e) {
       e.preventDefault();
       this.props.onSortDownByCouponNumber();

    }

    sortUpSectionName(e) {
       e.preventDefault();
       this.props.onSortUpBySectionName();
    }

    sortDownSectionName(e) {
       e.preventDefault();
       this.props.onSortDownBySectionName();
    }

    sortUpCouponStatus(e) {
       e.preventDefault();
       this.props.onSortUpByCouponStatus();
    }

    sortDownCouponStatus(e) {
      e.preventDefault();
      this.props.onSortDownByCouponStatus();
    }

    sortUpWindowNum(e) {
       e.preventDefault();
       this.props.onSortUpByWindowNum();
    }

    sortDownWindowNum(e) {
      e.preventDefault();
      this.props.onSortDownByWindowNum();
    }

    sortUpPriority(e) {
      e.preventDefault();
      this.props.onSortUpByPriority();
    }

    sortDownPriority(e) {
      e.preventDefault();
      this.props.onSortDownByPriority();
    }

    sortUpSpecialist(e) {
      e.preventDefault();
      this.props.onSortUpBySpecialist();
    }

    sortDownSpecialist(e) {
      e.preventDefault();
      this.props.onSortDownBySpecialist();
    }

    sortUpReceiptTime(e) {
      e.preventDefault();
      this.props.onSortUpByReceiptTime();
    }

    sortDownReceiptTime(e) {
      e.preventDefault();
      this.props.onSortDownByReceiptTime();
    }

    sortUpWaitingTime(e) {
      e.preventDefault();
      this.props.onSortUpByWaitingTime();
    }

    sortDownWaitingTime(e) {
      e.preventDefault();
      this.props.onSortDownByWaitingTime();
    }

    sortUpDuration(e) {
       e.preventDefault();
       this.props.onSortUpByDuration();
    }

    sortDownDuration(e) {
       e.preventDefault();
       this.props.onSortDownByDuration();
    }

    couponClick(id) {
       this.setState({
          selectedCoupon: id,
          buttonDisabled: false
       });
    }

    callToAdministrator(e) {
       e.preventDefault();
       alert(`Вызвать к администратору #ID - ${this.state.selectedCoupon}`);
    }

    startTaking(e) {
       e.preventDefault();
       alert(`Начать прием #ID - ${this.state.selectedCoupon}`);
    }

    cancelCoupon(e) {
       e.preventDefault();
         this.props.onCancelCoupon(this.state.selectedCoupon);
         this.setState({
            buttonDisabled: true
         });


    }

    eachCoupon(item, i) {
        return (
           <CouponItem
              key={i}
              coupon_number={item.coupon_number}
              section_name={item.section_name}
              coupon_status={item.coupon_status}
              window_number={item.window_number}
              with_priority={item.with_priority}
              specialist_name={item.specialist_name}
              receipt_time={item.receipt_time}
              waiting_time={item.waiting_time}
              duration={item.duration}
              id={item.id}
              selectedCoupon={this.state.selectedCoupon}
              couponClick={this.couponClick.bind(this, item.id)}
           />
        )
    }


    couponsOnPage(e) {
        this.setState({
           couponsPerPage: e.target.value,
           currentPage: 1
        });
    }


    renderCoupon() {
      const { currentPage } = this.state;

      const indexOfLastPage = currentPage * this.state.couponsPerPage;
      const indexOfFirstPage = indexOfLastPage - this.state.couponsPerPage;
      const currentCoupons = this.props.coupons.slice(indexOfFirstPage, indexOfLastPage);

      return (
        currentCoupons.map(this.eachCoupon)
       )
    }

    handlePagination(e) {
        e.preventDefault();
        this.setState({
           currentPage: Number(e.target.id)
        })
    }

    renderPagination() {
       return (
          <Pagination
             allcoupons={this.props.coupons}
             handlePagination={this.handlePagination}
             currentPage={this.state.currentPage}
             couponsOnPage={this.couponsOnPage}
             couponsPerPage={this.state.couponsPerPage}
             currentCoupons={this.state.currentCoupons}
          />
       )
    }

    render() {

       return (
          <div className="coupon-list">
            <div className="table">
               <div className="thead">
                 <div className="row">
                    <div className="cell"></div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortNumber ? "d-none": "")} href="#" onClick={this.sortUpCouponNumber}>№ талона</a>
                          <a className={(this.props.sortNumber ? "" : "d-none")} href="#" onClick={this.sortDownCouponNumber}>№ талона</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortNumber ? "d-none": "")}/>
                          <FaArrowUp className={(this.props.sortNumber ? "": "d-none")} />
                        </div>

                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortSectionName ? "d-none": "")} href="#" onClick={this.sortUpSectionName}>Наименование раздела</a>
                          <a className={(this.props.sortSectionName ? "": "d-none")} href="#" onClick={this.sortDownSectionName}>Наименование раздела</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortSectionName ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortSectionName ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortCouponStatus ? "d-none": "")} href="#" onClick={this.sortUpCouponStatus}>Статус талона</a>
                          <a className={(this.props.sortCouponStatus ? "": "d-none")} href="#" onClick={this.sortDownCouponStatus}>Статус талона</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortCouponStatus ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortCouponStatus ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortWindowNum ? "d-none": "")} href="#" onClick={this.sortUpWindowNum}>№ окна</a>
                          <a className={(this.props.sortWindowNum ? "": "d-none")} href="#" onClick={this.sortDownWindowNum}>№ окна</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortWindowNum ? "d-none": "")}  />
                          <FaArrowUp className={(this.props.sortWindowNum ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortPriority ? "d-none": "")} href="#" onClick={this.sortUpPriority}>С приоритетом</a>
                          <a className={(this.props.sortPriority ? "": "d-none")} href="#" onClick={this.sortDownPriority}>С приоритетом</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortPriority ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortPriority ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortSpecialist ? "d-none": "")} href="#" onClick={this.sortUpSpecialist}>ФИО специалиста</a>
                          <a className={(this.props.sortSpecialist ? "": "d-none")} href="#" onClick={this.sortDownSpecialist}>ФИО специалиста</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortSpecialist ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortSpecialist ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortReceiptTime ? "d-none": "")} href="#" onClick={this.sortUpReceiptTime}>Время получения талона</a>
                          <a className={(this.props.sortReceiptTime ? "": "d-none")} href="#" onClick={this.sortDownReceiptTime}>Время получения талона</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortReceiptTime ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortReceiptTime ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortWaitingTime ? "d-none": "")} href="#" onClick={this.sortUpWaitingTime}>Время ожидания</a>
                          <a className={(this.props.sortWaitingTime ? "": "d-none")} href="#" onClick={this.sortDownWaitingTime}>Время ожидания</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortWaitingTime ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortWaitingTime ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                    <div className="cell">
                      <div className="d-flex">
                        <div>
                          <a className={(this.props.sortDuration ? "d-none": "")} href="#" onClick={this.sortUpDuration}>Длительность приема</a>
                          <a className={(this.props.sortDuration ? "": "d-none")} href="#" onClick={this.sortDownDuration}>Длительность приема</a>
                        </div>
                        <div>
                          <FaArrowDown className={(this.props.sortDuration ? "d-none": "")} />
                          <FaArrowUp className={(this.props.sortDuration ? "": "d-none")} />
                        </div>
                      </div>
                    </div>
                 </div>
               </div>

               <div className="tbody">
                   {
                     (this.props.coupons.length > 0)
                     ? this.renderCoupon()
                     : <span></span>
                   }
               </div>


            </div>
            <div className="coupon-list__buttons">
               <div>
                 <button
                   className="btn-warning"
                   disabled={this.state.buttonDisabled}
                   onClick={this.callToAdministrator}>
                   Вызвать к администратору
                 </button>
               </div>
               <div>
                 <button
                   className="btn-warning"
                   disabled={this.state.buttonDisabled}
                   onClick={this.startTaking}>
                   Начать прием
                 </button>
               </div>
               <div>
                 <button
                   className="btn-outline-warning"
                   disabled={this.state.buttonDisabled}
                   onClick={this.cancelCoupon}>
                   Отменить талон
                  </button>
               </div>
            </div>
            {
              (this.props.coupons.length > 10)
              ? this.renderPagination()
              : <span></span>
            }
          </div>
       )
    }
}

const mapStateToProps = (state) => {
   return {
      coupons: state.coupons.coupons,
      sortNumber: state.coupons.sortNumber,
      sortSectionName: state.coupons.sortSectionName,
      sortCouponStatus: state.coupons.sortCouponStatus,
      sortWindowNum: state.coupons.sortWindowNum,
      sortPriority: state.coupons.sortPriority,
      sortSpecialist: state.coupons.sortSpecialist,
      sortReceiptTime: state.coupons.sortReceiptTime,
      sortWaitingTime: state.coupons.sortWaitingTime,
      sortDuration: state.coupons.sortDuration
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onCoupons: (coupons) => dispatch(initCoupons(coupons)),
     onCancelCoupon: (id) => dispatch(cancelCoupon(id)),
     onSortUpByCouponNumber: () => dispatch(sortUpByCouponNumber()),
     onSortDownByCouponNumber: () => dispatch(sortDownByCouponNumber()),
     onSortUpBySectionName: () => dispatch(sortUpBySectionName()),
     onSortDownBySectionName: () => dispatch(sortDownBySectionName()),
     onSortUpByCouponStatus: () => dispatch(sortUpByCouponStatus()),
     onSortDownByCouponStatus: () => dispatch(sortDownByCouponStatus()),
     onSortUpByWindowNum: () => dispatch(sortUpByWindowNum()),
     onSortDownByWindowNum: () => dispatch(sortDownByWindowNum()),
     onSortUpByPriority: () => dispatch(sortUpByPriority()),
     onSortDownByPriority: () => dispatch(sortDownByPriority()),
     onSortUpBySpecialist: () => dispatch(sortUpBySpecialist()),
     onSortDownBySpecialist: () => dispatch(sortDownBySpecialist()),
     onSortUpByReceiptTime: () => dispatch(sortUpByReceiptTime()),
     onSortDownByReceiptTime: () => dispatch(sortDownByReceiptTime()),
     onSortUpByWaitingTime: () => dispatch(sortUpByWaitingTime()),
     onSortDownByWaitingTime: () => dispatch(sortDownByWaitingTime()),
     onSortUpByDuration: () => dispatch(sortUpByDuration()),
     onSortDownByDuration: () => dispatch(sortDownByDuration())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CouponList);
