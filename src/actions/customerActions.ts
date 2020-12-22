export const clickOnButton = (type: any, data: any) => ({
  type,
  data,
});

export const fetchCustomerDetails = () => ({
  type: "FETCH_CUSTOMER_DETAILS",
});

export const getSelectedCustomerDetails = (phoneNumber: number) => ({
  type: "GET_SELECTED_CUSTOMER_DETAILS",
  phoneNumber,
});
export const clearSelectedCustomerDetail = () => ({
  type: "CLEAR_SELECTED_CUSTOMER_DETAILS",
});
