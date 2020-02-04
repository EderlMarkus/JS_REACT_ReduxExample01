import UserReducer from './user_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user_reducer: UserReducer
});
