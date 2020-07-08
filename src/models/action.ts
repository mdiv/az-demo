import { Action, ActionCreatorsMapObject } from 'redux';

export interface IAction<T extends string> extends Action {
  type: T;
}

export interface IActionPayload<T extends string, P> extends IAction<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P,
): IActionPayload<T, P>;
export function createAction(type: string, payload?: any) {
  return payload ? { type, payload } : { type };
}

export type ActionType<T extends ActionCreatorsMapObject> = ReturnType<
  T[keyof T]
>;

type Narrow<T, U> = T extends U ? T : never;
export type ActionByType<A, T extends string> = Narrow<A, { type: T }>;
