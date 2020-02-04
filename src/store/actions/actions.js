import * as ACTION_TYPES from './actions_type';

export const user_input = text => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  };
};
