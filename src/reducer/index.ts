import { combineReducers } from 'redux';
import { greetingReducer, GreetingState } from './greeting';

export const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export interface State {
  greeting: GreetingState;
}
