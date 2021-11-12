import {combineReducers} from 'redux';
import exchangeRateReducer from './exchangeRateReducer';

const rootReducer = combineReducers({
    exchangeRateReducer,
});

export default rootReducer;