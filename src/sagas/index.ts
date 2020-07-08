import { all, fork } from "redux-saga/effects";
import greetingSagas from "./greeting";

export default function* () {
  yield all([
    fork(greetingSagas),
  ]);
}