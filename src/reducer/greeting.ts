import { GreetingActions } from 'actions/greeting';
import { CallStatus, GreetingCounts } from '../models';
import { createReducer } from './createReducer';

export interface GreetingState {
  greeting: string;
  counts: GreetingCounts;
  callStatus: {
    greeting: CallStatus;
    counts: CallStatus;
  };
}

const initialState: GreetingState = {
  greeting: '',
  counts: {},
  callStatus: {
    greeting: {
      status: null,
      error: '',
    },
    counts: {
      status: null,
      error: '',
    },
  },
};

export const greetingReducer = createReducer<GreetingState>(initialState, {
  [GreetingActions.Greeting]: (state) => ({
    ...state,
    callStatus: {
      ...state.callStatus,
      greeting: {
        ...state.callStatus.greeting,
        status: 'fetching',
      },
    },
  }),
  [GreetingActions.GreetingSuccess]: (state, { greeting }) => ({
    ...state,
    greeting,
    callStatus: {
      ...state.callStatus,
      greeting: {
        status: 'success',
        error: '',
      },
    },
  }),
  [GreetingActions.GreetingError]: (state, { error }) => ({
    ...state,
    callStatus: {
      ...state.callStatus,
      greeting: {
        status: 'error',
        error,
      },
    },
  }),
  [GreetingActions.Counts]: (state) => ({
    ...state,
    callStatus: {
      ...state.callStatus,
      counts: {
        ...state.callStatus.counts,
        status: 'fetching',
      },
    },
  }),
  [GreetingActions.CountsSuccess]: (state, { counts }) => ({
    ...state,
    counts,
    callStatus: {
      ...state.callStatus,
      counts: {
        status: 'success',
        error: '',
      },
    },
  }),
  [GreetingActions.CountsError]: (state, { error }) => ({
    ...state,
    callStatus: {
      ...state.callStatus,
      counts: {
        status: 'error',
        error,
      },
    },
  }),
});
