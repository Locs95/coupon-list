
export const initCoupons = (data) => {
   return {
      type: 'COUPONS',
      payload: data
   }
}

export const cancelCoupon = (id) => {
   return {
      type: 'CANCEL_COUPONS',
      payload: id
   }
}

export const sortUpByCouponNumber = () => {
   return {
     type: 'SORT_UP_BY_COUPON_NUMBER'
   }
}

export const sortDownByCouponNumber = () => {
   return {
     type: 'SORT_DOWN_BY_COUPON_NUMBER'
   }
}

export const sortUpBySectionName = () => {
   return {
      type: 'SORT_UP_BY_SECTION_NAME'
   }
}

export const sortDownBySectionName = () => {
   return {
     type: 'SORT_DOWN_BY_SECTION_NAME'
   }
}

export const sortUpByCouponStatus = () => {
   return {
     type: 'SORT_UP_BY_COUPON_STATUS'
   }
}

export const sortDownByCouponStatus = () => {
   return {
     type: 'SORT_DOWN_BY_COUPON_STATUS'
   }
}

export const sortUpByWindowNum = () => {
  return {
    type: 'SORT_UP_BY_WINDOW_NUM'
  }
}

export const sortDownByWindowNum = () => {
  return {
    type: 'SORT_DOWN_BY_WINDOW_NUM'
  }
}

export const sortUpByPriority = () => {
   return {
     type: 'SORT_UP_BY_PRIORITY'
   }
}

export const sortDownByPriority = () => {
   return {
     type: 'SORT_DOWN_BY_PRIORITY'
   }
}

export const sortUpBySpecialist = () => {
   return {
     type: 'SORT_UP_BY_SPECIALIST'
   }
}

export const sortDownBySpecialist = () => {
   return {
     type: 'SORT_DOWN_BY_SPECIALIST'
   }
}

export const sortUpByReceiptTime = () => {
   return {
     type: 'SORT_UP_BY_RECEIPT_TIME'
   }
}

export const sortDownByReceiptTime = () => {
   return {
     type: 'SORT_DOWN_BY_RECEIPT_TIME'
   }
}

export const sortUpByWaitingTime = () => {
   return {
     type: 'SORT_UP_BY_WAITING_TIME'
   }
}

export const sortDownByWaitingTime = () => {
   return {
     type: 'SORT_DOWN_BY_WAITING_TIME'
   }
}

export const sortUpByDuration = () => {
   return {
      type: 'SORT_UP_BY_DURATION'
   }
}

export const sortDownByDuration = () => {
   return {
      type: 'SORT_DOWN_BY_DURATION'
   }
}
