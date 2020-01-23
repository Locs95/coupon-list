const initialState = {
   coupons: [],
   sortNumber: false,
   sortSectionName: false,
   sortCouponStatus: false,
   sortWindowNum: false,
   sortPriority: false,
   sortSpecialist: false,
   sortReceiptTime: false,
   sortWaitingTime: false,
   sortDuration: false
}

const coupons = (state = initialState, action) => {
     switch(action.type) {
         case 'COUPONS':
           return {
              coupons: action.payload
           }
         case 'CANCEL_COUPONS':
           return {
              coupons: state.coupons.filter(item => {
                  return item.id !== action.payload
              })
           }
         case 'SORT_UP_BY_COUPON_NUMBER':
           state.coupons.sort((a, b) => {
              if(a.coupon_number < b.coupon_number) { return -1; }
              if(a.coupon_number > b.coupon_number) { return 1; }
           });

           return {
              ...state,
              sortNumber: true
           }

          case 'SORT_DOWN_BY_COUPON_NUMBER':
            state.coupons.sort((a, b) => {
                if(a.coupon_number > b.coupon_number) {return -1;}
                if(a.coupon_number < b.coupon_number) {return 1;}
            })

            return {
               ...state,
               sortNumber: false
            }
          case 'SORT_UP_BY_SECTION_NAME':
            state.coupons.sort((a, b) => {
               if(a.section_name < b.section_name) {return -1;}
               if(a.section_name > b.section_name) {return 1}
            })
            return {
               ...state,
               sortSectionName: true
            }
          case 'SORT_DOWN_BY_SECTION_NAME':
            state.coupons.sort((a, b) => {
               if(a.section_name > b.section_name) {return -1;}
               if(a.section_name < b.section_name) {return 1}
            })
            return {
               ...state,
               sortSectionName: false
            }
          case 'SORT_UP_BY_COUPON_STATUS':
            state.coupons.sort((a, b) => {
               if(a.coupon_status < b.coupon_status) {return -1;}
               if(a.coupon_status > b.coupon_status) {return 1}
            })

            return {
              ...state,
              sortCouponStatus: true
            }
          case 'SORT_DOWN_BY_COUPON_STATUS':
            state.coupons.sort((a, b) => {
               if(a.coupon_status > b.coupon_status) {return -1}
               if(a.coupon_status < b.coupon_status) {return 1}
            })
            return {
              ...state,
              sortCouponStatus: false
            }
          case 'SORT_UP_BY_WINDOW_NUM':
            state.coupons.sort((a, b) => {
               if(a.window_number < b.window_number) {return -1;}
               if(a.window_number > b.window_number) {return 1}
            })
            return {
              ...state,
              sortWindowNum: true
            }
          case 'SORT_DOWN_BY_WINDOW_NUM':
              state.coupons.sort((a, b) => {
                 if(a.window_number > b.window_number) {return -1;}
                 if(a.window_number < b.window_number) {return 1}
              })
              return {
                ...state,
                sortWindowNum: false
              }
          case 'SORT_UP_BY_PRIORITY':
              state.coupons.sort((a, b) => {
                  if(a.with_priority < b.with_priority) {return -1;}
                  if(a.with_priority > b.with_priority) {return 1}
              })
              return {
                ...state,
                sortPriority: true
              }
          case 'SORT_DOWN_BY_PRIORITY':
              state.coupons.sort((a, b) => {
                  if(a.with_priority > b.with_priority) {return -1;}
                  if(a.with_priority < b.with_priority) {return 1}
              })
              return {
                ...state,
                sortPriority: false
              }
          case 'SORT_UP_BY_SPECIALIST':
              state.coupons.sort((a, b) => {
                  if(a.specialist_name < b.specialist_name) {return -1;}
                  if(a.specialist_name > b.specialist_name) {return 1}
              })
              return {
                ...state,
                sortSpecialist: true
              }
          case 'SORT_DOWN_BY_SPECIALIST':
              state.coupons.sort((a, b) => {
                  if(a.specialist_name > b.specialist_name) {return -1;}
                  if(a.specialist_name < b.specialist_name) {return 1}
              })
              return {
                ...state,
                sortSpecialist: false
              }
          case 'SORT_UP_BY_RECEIPT_TIME':
              state.coupons.sort((a, b) => {
                  if(a.receipt_time < b.receipt_time) {return -1;}
                  if(a.receipt_time > b.receipt_time) {return 1}
              })
              return {
                  ...state,
                  sortReceiptTime: true
              }
          case 'SORT_DOWN_BY_RECEIPT_TIME':
              state.coupons.sort((a, b) => {
                  if(a.receipt_time > b.receipt_time) {return -1;}
                  if(a.receipt_time < b.receipt_time) {return 1}
              })
              return {
                  ...state,
                  sortReceiptTime: false
              }
          case 'SORT_UP_BY_WAITING_TIME':
              state.coupons.sort((a, b) => {
                  if(a.waiting_time < b.waiting_time) {return -1;}
                  if(a.waiting_time > b.waiting_time) {return 1}
              })
              return {
                  ...state,
                  sortWaitingTime: true
              }
          case 'SORT_DOWN_BY_WAITING_TIME':
              state.coupons.sort((a, b) => {
                  if(a.waiting_time > b.waiting_time) {return -1;}
                  if(a.waiting_time < b.waiting_time) {return 1}
              })
              return {
                  ...state,
                  sortWaitingTime: false
              }
          case 'SORT_UP_BY_DURATION':
              state.coupons.sort((a, b) => {
                  if(a.duration < b.duration) {return -1;}
                  if(a.duration > b.duration) {return 1}
              })
              return {
                  ...state,
                  sortDuration: true
              }
          case 'SORT_DOWN_BY_DURATION':
              state.coupons.sort((a, b) => {
                  if(a.duration > b.duration) {return -1;}
                  if(a.duration < b.duration) {return 1}
              })
              return {
                  ...state,
                  sortDuration: false
              }
          default:
            return state
     }
}


export default coupons;
