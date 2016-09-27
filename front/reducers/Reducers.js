import { combineReducers } from 'redux';
import { APPLY_FETCH_TABLE_DATA } from '../actions/Actions';

function TableData(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case APPLY_FETCH_TABLE_DATA:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  TableData,
});