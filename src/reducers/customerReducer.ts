const initialState = {
  customerDetails: null,
  selectedCustomerDetail: {},
};
const getSelectedCustomerDetails = (state: any, phoneNumber: any) => {
  return (
    state.customerDetails &&
    state.customerDetails.filter(
      (customer: any) => customer.phoneNumber === phoneNumber
    )
  );
};
export const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_CUSTOMER_DETAILS_SUCCESS":
      return {
        ...state,
        customerDetails: action.payload.customerList,
      };
    case "GET_SELECTED_CUSTOMER_DETAILS":
      console.log("GET_SELECTED_CUSTOMER_DETAILS");
      console.log(getSelectedCustomerDetails(state, action.phoneNumber));
      return {
        ...state,
        selectedCustomerDetail: getSelectedCustomerDetails(
          state,
          action.phoneNumber
        ),
      };
    case "CLEAR_SELECTED_CUSTOMER_DETAILS":
      return {
        ...state,
        selectedCustomerDetail: {},
      };
    default:
      return state;
  }
};
