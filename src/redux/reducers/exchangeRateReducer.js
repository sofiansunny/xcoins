import {
  FETCHING_LATEST_EXCHANGE_RATES_SUCCESS,
  FETCHING_LATEST_EXCHANGE_RATES_FAILURE,
} from '../actionTypes';

const initialState = {
  latestCurrencyRates: null,
  isErrorLoadingData: true,
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCHING_LATEST_EXCHANGE_RATES_SUCCESS) {
    return {
      ...state,
      latestCurrencyRates: action.data,
      isErrorLoadingData: false,
    };
  }
  if (action.type === FETCHING_LATEST_EXCHANGE_RATES_FAILURE) {
    return {
      ...state,
      latestCurrencyRates: null,
      isErrorLoadingData: true,
    };
  }
  return state;
}

export default rootReducer;
