import { delay, put, takeLatest } from "redux-saga/effects";
import { getCustomers } from "../provideData/customerData";
/**
 * @description Handle the get customersList
 */
export function* customerListSaga() {
  yield takeLatest("FETCH_CUSTOMER_DETAILS", fetchCustomerList);
}

/**
 * @description This function is use to make the call to get customers List
 *
 * @param action
 */
function* fetchCustomerList(action: any) {
  let customerList: any = [];
  getCustomers().then((result) => {
    customerList = result.Customer;
  });
  yield delay(3000);
  yield put({
    payload: {
      customerList: customerList,
    },
    type: "FETCH_CUSTOMER_DETAILS_SUCCESS",
  });
}
