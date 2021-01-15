import { combineReducers } from 'redux';
import khoaHocReducer from './khoaHocReducer.js';
import authReducer from './athReducer.js'
const rootReducer = combineReducers({
    khoaHocReducer,
    authReducer,
});
export default rootReducer; 