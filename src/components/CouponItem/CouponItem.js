import React,{Component} from 'react';

class CouponItem extends Component {
   render() {
      return (
        <div
          className={"row coupon-item " + (this.props.id == this.props.selectedCoupon ? 'active': '')}
          onClick={this.props.couponClick}>
          <div className="cell">
            <input
              type="radio"
              name="coupon"
              onChange={this.props.couponClick}
              checked={this.props.id == this.props.selectedCoupon}/>
          </div>
          <div className="cell">
            <div className="cell-title">№ талона</div>
            <div>{this.props.coupon_number}</div></div>
          <div className="cell">
            <div className="cell-title">Наименование раздела</div>
            <div>{this.props.section_name}</div>
          </div>
          <div className="cell">
            <div className="cell-title">Статус талона</div>
            <div>{this.props.coupon_status}</div>
          </div>
          <div className="cell">
            <div className="cell-title">№ окна</div>
            <div>{this.props.window_number}</div>
          </div>
          <div className="cell">
            <div className="cell-title">С приоритетом</div>
            <div>{this.props.with_priority}</div>
          </div>
          <div className="cell">
            <div className="cell-title">ФИО специалиста</div>
            <div>{this.props.specialist_name}</div>
          </div>
          <div className="cell">
            <div className="cell-title">Время получения талона</div>
            <div>{this.props.receipt_time}</div>
          </div>
          <div className="cell">
            <div className="cell-title">Время ожидания</div>
            <div>{this.props.waiting_time}</div>
          </div>
          <div className="cell">
            <div className="cell-title">Длительность приема</div>
            <div>{this.props.duration}</div>
          </div>
        </div>
      )
   }
}

export default CouponItem;
