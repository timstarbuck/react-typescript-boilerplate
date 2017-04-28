import {combineReducers} from 'redux';
import {ajaxStatusReducer} from './ajaxStatusReducer';

const rootReducer = combineReducers({
   ajaxStatusReducer,
});

export default rootReducer;
