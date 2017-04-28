import {actionTypes} from './actionTypes';

const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === '_SUCCESS';
};

export const ajaxStatusReducer = (state = 0, action) => {
  if (action.type === actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === actionTypes.AJAX_CALL_ERROR ||
      actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
};
