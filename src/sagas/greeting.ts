import { GreetingAction, GreetingActions } from 'actions/greeting';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCounts, getGreeting } from 'service/greetings';

function* getGreetingEffect(action: any) {
  try {
    const greeting = yield call(getGreeting, action.payload.name);
    yield put(GreetingAction.GreetingSuccess(greeting));
  } catch (error) {
    yield put(GreetingAction.GreetingError(error));
  }
}

function* getCountsEffect() {
  try {
    const counts = yield call(getCounts);
    yield put(GreetingAction.CountsSuccess(counts));
  } catch (error) {
    yield put(GreetingAction.CountsError(error));
  }
}

function* greetingSagas() {
  yield takeEvery(GreetingActions.Greeting, getGreetingEffect);
  yield takeEvery(GreetingActions.Counts, getCountsEffect);
}

export default greetingSagas;
