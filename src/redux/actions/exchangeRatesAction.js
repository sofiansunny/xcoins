import { GET_LATEST_EXCHANGE_RATES } from '../actionTypes';

export function getLatestExchangeRatesAction(payload) {
  return {
    type: GET_LATEST_EXCHANGE_RATES,
    payload,
  };
}
