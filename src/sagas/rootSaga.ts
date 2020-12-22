import { all } from "redux-saga/effects";
import { customerListSaga } from "./customerSaga";

function* rootSaga() {
  yield all([customerListSaga()]);
}
export default rootSaga;
