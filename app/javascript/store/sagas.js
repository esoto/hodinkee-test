import { all, fork } from 'redux-saga/effects';

import { bootApplication } from 'store/app/saga';
import articles from 'store/articles/saga';

export default function* rootSaga() {
  yield all([
    fork(bootApplication),
    ...articles,
  ])
}
