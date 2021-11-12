import {fork} from 'redux-saga/effects';

import exchangeRatesSaga from './exchangeRatesSaga'
export default function* rootSaga() {
  yield fork(exchangeRatesSaga);  
}
