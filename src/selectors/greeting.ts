import { State } from 'reducer';
import { createSelector } from 'reselect';

export const selectGreeting = createSelector(
  (state: State) => state,
  (state) => state.greeting.greeting,
);

export const selectGreetingCounts = createSelector(
  (state: State) => state,
  (state) => state.greeting.counts,
);

export const selectCallStatus = createSelector(
  (state: State) => state,
  (state) => state.greeting.callStatus,
);
