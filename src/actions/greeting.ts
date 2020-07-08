import { ActionType, createAction, GreetingCounts } from 'models';

export const GreetingActions = {
  Greeting: '@@async/greeting/begin',
  GreetingError: '@@async/greeting/error',
  GreetingSuccess: '@@async/greeting/success',
  Counts: '@@async/greetingCounts/begin',
  CountsError: '@@async/greetingCounts/error',
  CountsSuccess: '@@async/greetingCounts/success',
};

export const GreetingAction = {
  Greeting: (name: string) => createAction(GreetingActions.Greeting, { name }),
  GreetingError: (error: string) =>
    createAction(GreetingActions.GreetingError, { error }),
  GreetingSuccess: (greeting: string) =>
    createAction(GreetingActions.GreetingSuccess, { greeting }),
  Counts: () => createAction(GreetingActions.Counts),
  CountsError: (error: string) =>
    createAction(GreetingActions.CountsError, { error }),
  CountsSuccess: (counts: GreetingCounts) =>
    createAction(GreetingActions.CountsSuccess, { counts }),
};

export type GreetingActionTypes = ActionType<typeof GreetingAction>;
