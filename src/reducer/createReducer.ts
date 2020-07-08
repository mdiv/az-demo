import { AnyAction } from 'redux';
import { ActionByType, IActionPayload } from '../models';

export const createReducer = <
  State = any,
  Types extends string = any,
  Actions extends AnyAction = any
>(
  initial: State,
  reducers: Partial<
    {
      [Type in Types]: (
        state: State,
        payload: ActionByType<Actions, Type>['payload'],
      ) => State;
    }
  >,
) => (state: State = initial, action: IActionPayload<Types, any>) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
